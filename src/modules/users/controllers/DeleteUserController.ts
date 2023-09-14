import { route, DELETE } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { IUserId } from "@users/interfaces/UserInterface";
import DeleteUserUseCase from "@users/use-cases/DeleteUserUseCase";

@route("/users")
export default class DeleteUserController {
  deleteUserUseCase: DeleteUserUseCase;

  constructor({ deleteUserUseCase }: { deleteUserUseCase: DeleteUserUseCase }) {
    this.deleteUserUseCase = deleteUserUseCase;
  }

  @route("/")
  @DELETE()
  async handle(req: Request, res: Response) {
    const { _id }: IUserId = req.body;

    res.send(await this.deleteUserUseCase.handle({ _id }));
  }
}
