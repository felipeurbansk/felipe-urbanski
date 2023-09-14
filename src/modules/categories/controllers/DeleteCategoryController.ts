import { route, DELETE } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { ICategoryId } from "@categories/interfaces/CategoryInterface";
import DeleteCategoryUseCase from "@categories/use-cases/DeleteCategoryUseCase";

@route("/categories")
export default class DeleteCategoryController {
  deleteCategoryUseCase: DeleteCategoryUseCase;

  constructor({
    deleteCategoryUseCase,
  }: {
    deleteCategoryUseCase: DeleteCategoryUseCase;
  }) {
    this.deleteCategoryUseCase = deleteCategoryUseCase;
  }

  @route("/")
  @DELETE()
  async handle(req: Request, res: Response) {
    const { _id }: ICategoryId = req.body;

    res.send(await this.deleteCategoryUseCase.handle({ _id }));
  }
}
