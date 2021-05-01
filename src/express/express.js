import express from "express";
import dotenv from "dotenv";

import router from "./router.js";

const env = dotenv.config(); // Environment Variable
if (env.error) throw env.error;

const app = express();

app.disable("x-powered-by");

app.use(express.json());
// app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

app.use("/:tentant/auth/v1", router);

app.use((req, res) => {
  res.status(404).send({
    error: "NotFound",
    message: "Resource you are looking for is missing or not found.",
  });
});

const PORT = process.env.PORT || 3000;

const startServer = () => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

  app.on("error", () => console.log("Error occured in Server"));
};

export default startServer;
