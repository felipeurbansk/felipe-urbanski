import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetAllUsersUseCase from "@users/use-cases/GetAllUsersUseCase";

@route("/users")
export default class GetAllUsersController {
  getAllUsersUseCase: GetAllUsersUseCase;

  constructor({
    getAllUsersUseCase,
  }: {
    getAllUsersUseCase: GetAllUsersUseCase;
  }) {
    this.getAllUsersUseCase = getAllUsersUseCase;
  }

  @route("/all")
  @GET()
  async handle(req: Request, res: Response) {
    res.send(await this.getAllUsersUseCase.handle());
  }
}
