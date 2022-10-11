import express, { Request, Response } from "express";

const dotenv = require("dotenv");

dotenv.config();

const app = express();

const DEFAULT_PORT = "3000";
const port = process.env.PORT || DEFAULT_PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server ");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
