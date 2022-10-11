import express, { Request, Response } from "express";
import routes from "@routes/index";

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const DEFAULT_PORT = "3000";
const port = process.env.PORT || DEFAULT_PORT;

app.use("/", routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
