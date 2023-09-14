import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetCategoryByIdUseCase from "@categories/use-cases/GetCategoryByIdUseCase";

@route("/categories")
export default class GetCategoryByIdController {
  getCategoryByIdUseCase: GetCategoryByIdUseCase;

  constructor({
    getCategoryByIdUseCase,
  }: {
    getCategoryByIdUseCase: GetCategoryByIdUseCase;
  }) {
    this.getCategoryByIdUseCase = getCategoryByIdUseCase;
  }

  @route("/:_id")
  @GET()
  async handle(req: Request, res: Response) {
    const { _id } = req.params;

    res.send(await this.getCategoryByIdUseCase.handle({ _id }));
  }
}
