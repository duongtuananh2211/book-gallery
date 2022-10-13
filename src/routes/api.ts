import express from "express";
import UserController from "@controllers/UserController";

const router = express.Router();

new UserController(router);

router.get("/info", (req, res) => {
  res.send("This is api link");
});

export default router;
