import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetAllProductsUseCase from "@products/use-cases/GetAllProductsUseCase";

@route("/products")
export default class GetAllProductsController {
  getAllProductsUseCase: GetAllProductsUseCase;

  constructor({
    getAllProductsUseCase,
  }: {
    getAllProductsUseCase: GetAllProductsUseCase;
  }) {
    this.getAllProductsUseCase = getAllProductsUseCase;
  }

  @route("/all")
  @GET()
  async handle(req: Request, res: Response) {
    res.send(await this.getAllProductsUseCase.handle());
  }
}
