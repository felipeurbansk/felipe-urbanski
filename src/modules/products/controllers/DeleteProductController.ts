import { route, DELETE } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { IProductId } from "@products/interfaces/ProductInterface";
import DeleteProductUseCase from "@products/use-cases/DeleteProductUseCase";

@route("/products")
export default class DeleteProductController {
  deleteProductUseCase: DeleteProductUseCase;

  constructor({
    deleteProductUseCase,
  }: {
    deleteProductUseCase: DeleteProductUseCase;
  }) {
    this.deleteProductUseCase = deleteProductUseCase;
  }

  @route("/")
  @DELETE()
  async handle(req: Request, res: Response) {
    const { _id }: IProductId = req.body;

    res.send(await this.deleteProductUseCase.handle({ _id }));
  }
}
