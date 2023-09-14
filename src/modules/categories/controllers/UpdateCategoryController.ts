import { route, PUT } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { ICategory } from "@categories/interfaces/CategoryInterface";
import UpdateCategoryUseCase from "@categories/use-cases/UpdateCategoryUseCase";

@route("/categories")
export default class UpdateCategoryController {
  updateCategoryUseCase: UpdateCategoryUseCase;

  constructor({
    updateCategoryUseCase,
  }: {
    updateCategoryUseCase: UpdateCategoryUseCase;
  }) {
    this.updateCategoryUseCase = updateCategoryUseCase;
  }

  @route("/")
  @PUT()
  async handle(req: Request, res: Response) {
    const body: ICategory = req.body;

    res.send(await this.updateCategoryUseCase.handle(body));
  }
}
