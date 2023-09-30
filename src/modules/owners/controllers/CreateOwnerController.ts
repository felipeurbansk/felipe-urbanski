import { route, POST } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import CreateOwnerUseCase from "@owners/use-cases/CreateOwnerUseCase";

@route("/owners")
export default class CreateOwnerController {
  private createOwnerUseCase: CreateOwnerUseCase;

  constructor({
    createOwnerUseCase,
  }: {
    createOwnerUseCase: CreateOwnerUseCase;
  }) {
    this.createOwnerUseCase = createOwnerUseCase;
  }

  @route("/")
  @POST()
  async handle(req: Request, res: Response) {
    const body = req.body;

    res.send(await this.createOwnerUseCase.handle(body));
  }
}
