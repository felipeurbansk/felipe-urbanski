import { route, POST } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import CreateCategoryUseCase from "@categories/use-cases/CreateCategoryUseCase";

@route("/categories")
export default class CreateCategoryController {
  private createCategoryUseCase: CreateCategoryUseCase;

  constructor({
    createCategoryUseCase,
  }: {
    createCategoryUseCase: CreateCategoryUseCase;
  }) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  @route("/")
  @POST()
  async handle(req: Request, res: Response) {
    const body = req.body;

    res.send(await this.createCategoryUseCase.handle(body));
  }
}
