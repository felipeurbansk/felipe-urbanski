import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetUsersUseCase from "@users/use-cases/GetUsersUseCase";

@route("/users")
export default class GetUsersController {
  getUsersUseCase: GetUsersUseCase;

  constructor({ getUsersUseCase }: { getUsersUseCase: GetUsersUseCase }) {
    this.getUsersUseCase = getUsersUseCase;
  }

  @route("/")
  @GET()
  async handle(req: Request, res: Response) {
    const { name, email } = req.query;

    res.send(
      await this.getUsersUseCase.handle({
        name: String(name),
        email: String(email),
      })
    );
  }
}
