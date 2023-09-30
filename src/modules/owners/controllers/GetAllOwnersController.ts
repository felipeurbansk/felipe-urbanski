import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetAllOwnersUseCase from "@owners/use-cases/GetAllOwnersUseCase";

@route("/owners")
export default class GetAllOwnersController {
  getAllOwnersUseCase: GetAllOwnersUseCase;

  constructor({
    getAllOwnersUseCase,
  }: {
    getAllOwnersUseCase: GetAllOwnersUseCase;
  }) {
    this.getAllOwnersUseCase = getAllOwnersUseCase;
  }

  @route("/all")
  @GET()
  async handle(req: Request, res: Response) {
    res.send(await this.getAllOwnersUseCase.handle());
  }
}
