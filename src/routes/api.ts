import express from "express";
import BaseController from "@core/BaseController";

const bc = BaseController.getInstance();

const router = express.Router();

router.get("/info", (req, res) => {
  console.log(bc);
  res.send("This is api link");
});

export default router;
