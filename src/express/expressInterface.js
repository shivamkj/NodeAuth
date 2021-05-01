import { verifyToken } from "../utils/jwt.js";
import { baseHeader } from "../utils/responses.js";

export default (controller, isProtected = false) => async (req, res) => {
  try {
    if (isProtected) {
      const secret = process.env.ACCESS_TOKEN_SECRET;
      const token = req.headers.authorization;
      const payload = await verifyToken(token, secret);
      req.user = payload;
    }

    const request = {
      body: req.body,
      query: req.query,
      params: req.params,
      user: req.user,
    };
    const response = await controller(request);

    if (response.headers) res.set(response.headers);
    res.status(response.statusCode).send(response.body);
  } catch (err) {
    res.set(baseHeader);

    if (err.statusCode != null) {
      // Handle known errors
      res.status(err.statusCode).send({ message: err.message });
    } else {
      // Handle Unknown Errors
      console.error("Unknown Error", err);
      res.status(500).send({ error: "An unkown error occurred." });
    }
  }
};
