import { Router } from "express";
import BaseControllerInterface from "@core/interfaces/BaseControllerInterface";
import Singleton from "@core/Singleton";
import BaseService from "@core/BaseService";

export const resource = (
  router: Router,
  path: string,
  controller: BaseControllerInterface
) => {
  router.get(path, (req, res) =>
    Singleton<BaseControllerInterface>(controller).list(
      req,
      res,
      Singleton(BaseService)
    )
  );

  router.get(path + "/:id", (req, res) =>
    Singleton<BaseControllerInterface>(controller).get(
      req,
      res,
      Singleton(BaseService)
    )
  );
};
