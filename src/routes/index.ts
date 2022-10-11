import express, { Response, Request } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export default router;
