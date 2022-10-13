import BaseControllerInterface from "@core/interfaces/BaseControllerInterface";
import { Router } from "express";
import BaseRepositoryInterface from "@core/interfaces/BaseRepositoryInterface";

abstract class BaseController implements BaseControllerInterface {
  path: string = "";

  constructor(router: Router, path: string, repository: BaseRepositoryInterface) {
    this.loadPath(path);

    router.all(this.path, (req, res) => {
      console.log(req.method);


      res.send(this.path);
    });
  }

  loadPath(path: string) {
    this.path = "/" + path;
  }
}

export default BaseController;
