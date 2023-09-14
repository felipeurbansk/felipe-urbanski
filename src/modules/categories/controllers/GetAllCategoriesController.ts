import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetAllCategoriesUseCase from "@categories/use-cases/GetAllCategoriesUseCase";

@route("/categories")
export default class GetAllCategoriesController {
  getAllCategoriesUseCase: GetAllCategoriesUseCase;

  constructor({
    getAllCategoriesUseCase,
  }: {
    getAllCategoriesUseCase: GetAllCategoriesUseCase;
  }) {
    this.getAllCategoriesUseCase = getAllCategoriesUseCase;
  }

  @route("/all")
  @GET()
  async handle(req: Request, res: Response) {
    res.send(await this.getAllCategoriesUseCase.handle());
  }
}
