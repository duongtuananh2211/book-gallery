import BaseControllerInterface from "@core/interfaces/BaseControllerInterface";
import { Request, Response } from "express";

import BaseServiceInterface from "@core/interfaces/BaseServiceInterface";

abstract class BaseController implements BaseControllerInterface {
  list: (
    req: Request,
    res: Response,
    service: BaseServiceInterface
  ) => Promise<void> = async (req, res, service) => {
    console.log("params", req.params);
    const data = await service.list();

    res.json(data);
    return;
  };

  get: (
    req: Request,
    res: Response,
    service: BaseServiceInterface
  ) => Promise<void> = async (req, res, service) => {
    const id = req.params.id;

    console.log("get ", id);

    const data = await service.list();

    res.json(data);
    return;
  };
}

export default BaseController;
