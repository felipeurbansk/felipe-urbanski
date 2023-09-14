import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetCategoriesUseCase from "@categories/use-cases/GetCategoriesUseCase";

@route("/categories")
export default class GetCategoriesController {
  getCategoriesUseCase: GetCategoriesUseCase;

  constructor({
    getCategoriesUseCase,
  }: {
    getCategoriesUseCase: GetCategoriesUseCase;
  }) {
    this.getCategoriesUseCase = getCategoriesUseCase;
  }

  @route("/")
  @GET()
  async handle(req: Request, res: Response) {
    const { title } = req.query;

    res.send(
      await this.getCategoriesUseCase.handle({
        title: String(title),
      })
    );
  }
}
