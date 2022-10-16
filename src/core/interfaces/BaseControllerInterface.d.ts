import { Request, Response } from "express";
import BaseServiceInterface from "@core/interfaces/BaseServiceInterface";

interface BaseControllerInterface {
  list: (
    req: Request,
    res: Response,
    service: BaseServiceInterface
  ) => Promise<void>;

  get: (
    req: Request,
    res: Response,
    service: BaseServiceInterface
  ) => Promise<void>;
}

export default BaseControllerInterface;
