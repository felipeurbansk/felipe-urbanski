import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetOwnerByIdUseCase from "modules/owner/use-cases/GetOwnerByIdUseCase";

@route("/owners")
export default class GetOwnerByIdController {
  getOwnerByIdUseCase: GetOwnerByIdUseCase;

  constructor({
    getOwnerByIdUseCase,
  }: {
    getOwnerByIdUseCase: GetOwnerByIdUseCase;
  }) {
    this.getOwnerByIdUseCase = getOwnerByIdUseCase;
  }

  @route("/:_id")
  @GET()
  async handle(req: Request, res: Response) {
    const { _id } = req.params;

    res.send(await this.getOwnerByIdUseCase.handle({ _id }));
  }
}
