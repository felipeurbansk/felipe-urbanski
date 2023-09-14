import { route, PATCH } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import CreateProductUseCase from "@products/use-cases/CreateProductUseCase";
import SyncProductWithCategoryUseCase from "@products/use-cases/SyncProductWithCategoryUseCase";

@route("/products")
export default class SyncProductWithCategoryController {
  private syncProductWithCategoryUseCase: SyncProductWithCategoryUseCase;

  constructor({
    syncProductWithCategoryUseCase,
  }: {
    syncProductWithCategoryUseCase: SyncProductWithCategoryUseCase;
  }) {
    this.syncProductWithCategoryUseCase = syncProductWithCategoryUseCase;
  }

  @route("/")
  @PATCH()
  async handle(req: Request, res: Response) {
    const body = req.body;

    res.send(await this.syncProductWithCategoryUseCase.handle(body));
  }
}
