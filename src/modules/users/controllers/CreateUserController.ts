import { route, POST } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import CreateUserUseCase from "@users/use-cases/CreateUserUseCase";

@route("/users")
export default class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor({ createUserUseCase }: { createUserUseCase: CreateUserUseCase }) {
    this.createUserUseCase = createUserUseCase;
  }

  @route("/")
  @POST()
  async handle(req: Request, res: Response) {
    const body = req.body;

    res.send(await this.createUserUseCase.handle(body));
  }
}
