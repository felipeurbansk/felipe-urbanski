import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetProductsUseCase from "@products/use-cases/GetProductsUseCase";

@route("/products")
export default class GetProductsController {
  getProductsUseCase: GetProductsUseCase;

  constructor({
    getProductsUseCase,
  }: {
    getProductsUseCase: GetProductsUseCase;
  }) {
    this.getProductsUseCase = getProductsUseCase;
  }

  @route("/")
  @GET()
  async handle(req: Request, res: Response) {
    const { title } = req.query;

    res.send(
      await this.getProductsUseCase.handle({
        title: String(title),
      })
    );
  }
}
