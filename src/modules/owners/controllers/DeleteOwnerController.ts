import { route, DELETE } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { IOwnerId } from "@owners/interfaces/OwnerInterface";
import DeleteOwnerUseCase from "@owners/use-cases/DeleteOwnerUseCase";

@route("/owners")
export default class DeleteOwnerController {
  deleteOwnerUseCase: DeleteOwnerUseCase;

  constructor({
    deleteOwnerUseCase,
  }: {
    deleteOwnerUseCase: DeleteOwnerUseCase;
  }) {
    this.deleteOwnerUseCase = deleteOwnerUseCase;
  }

  @route("/")
  @DELETE()
  async handle(req: Request, res: Response) {
    const { _id }: IOwnerId = req.body;

    res.send(await this.deleteOwnerUseCase.handle({ _id }));
  }
}
