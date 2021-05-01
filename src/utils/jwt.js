import JWT from "jsonwebtoken";
import { ForbiddenError, UnauthorizedError } from "./errors.js";

const signToken = (options, secret) =>
  new Promise((resolve, reject) => {
    const payload = {};
    const _options = {
      issuer: "shivamkj.com",
      ...options,
    };
    JWT.sign(payload, secret, _options, (err, token) => {
      if (err) reject(err.message);
      resolve(token);
    });
  });

const verifyToken = (token, secret) => {
  try {
    return JWT.verify(token, secret);
  } catch (err) {
    if (err.name === "TokenExpiredError")
      throw new UnauthorizedError("Token Expired");
    else if (err.name === "JsonWebTokenError")
      throw new ForbiddenError("Invalid Token");
  }
};

export { signToken, verifyToken };
