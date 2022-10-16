import express from "express";
import UserController from "@controllers/UserController";
import { resource } from "@core/Router";

const router = express.Router();

resource(router, "/users", UserController as any);

export default router;
