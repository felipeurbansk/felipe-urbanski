import { route, PUT } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { IOwner } from "@owners/interfaces/OwnerInterface";
import UpdateOwnerUseCase from "@owners/use-cases/UpdateOwnerUseCase";

@route("/owners")
export default class UpdateOwnerController {
  updateOwnerUseCase: UpdateOwnerUseCase;

  constructor({
    updateOwnerUseCase,
  }: {
    updateOwnerUseCase: UpdateOwnerUseCase;
  }) {
    this.updateOwnerUseCase = updateOwnerUseCase;
  }

  @route("/")
  @PUT()
  async handle(req: Request, res: Response) {
    const body: IOwner = req.body;

    res.send(await this.updateOwnerUseCase.handle(body));
  }
}
