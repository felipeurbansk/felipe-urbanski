import { route, PUT } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { IUser } from "@users/interfaces/UserInterface";
import UpdateUserUseCase from "@users/use-cases/UpdateUserUseCase";

@route("/users")
export default class UpdateUserController {
  updateUserUseCase: UpdateUserUseCase;

  constructor({ updateUserUseCase }: { updateUserUseCase: UpdateUserUseCase }) {
    this.updateUserUseCase = updateUserUseCase;
  }

  @route("/")
  @PUT()
  async handle(req: Request, res: Response) {
    const body: IUser = req.body;

    res.send(await this.updateUserUseCase.handle(body));
  }
}
