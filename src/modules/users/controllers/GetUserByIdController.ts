import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetUserByIdUseCase from "@users/use-cases/GetUserByIdUseCase";

@route("/users")
export default class GetUserByIdController {
  getUserByIdUseCase: GetUserByIdUseCase;

  constructor({
    getUserByIdUseCase,
  }: {
    getUserByIdUseCase: GetUserByIdUseCase;
  }) {
    this.getUserByIdUseCase = getUserByIdUseCase;
  }

  @route("/:_id")
  @GET()
  async handle(req: Request, res: Response) {
    const { _id } = req.params;

    res.send(await this.getUserByIdUseCase.handle({ _id }));
  }
}
