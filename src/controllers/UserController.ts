import BaseController from "@core/BaseController";
import { Router } from "express";
import BaseRepository from "../core/BaseRepository";

const PATH = "users";
class UserController extends BaseController {
  constructor(router: Router) {
    super(router, PATH, BaseRepository);
  }
}

export default UserController;
