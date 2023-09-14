import { route, PUT } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import { IProduct } from "@products/interfaces/ProductInterface";
import UpdateProductUseCase from "@products/use-cases/UpdateProductUseCase";

@route("/products")
export default class UpdateProductController {
  updateProductUseCase: UpdateProductUseCase;

  constructor({
    updateProductUseCase,
  }: {
    updateProductUseCase: UpdateProductUseCase;
  }) {
    this.updateProductUseCase = updateProductUseCase;
  }

  @route("/")
  @PUT()
  async handle(req: Request, res: Response) {
    const body: IProduct = req.body;

    res.send(await this.updateProductUseCase.handle(body));
  }
}
