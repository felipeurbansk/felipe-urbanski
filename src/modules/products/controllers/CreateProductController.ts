import { route, POST } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import CreateProductUseCase from "@products/use-cases/CreateProductUseCase";

@route("/products")
export default class CreateProductController {
  private createProductUseCase: CreateProductUseCase;

  constructor({
    createProductUseCase,
  }: {
    createProductUseCase: CreateProductUseCase;
  }) {
    this.createProductUseCase = createProductUseCase;
  }

  @route("/")
  @POST()
  async handle(req: Request, res: Response) {
    const body = req.body;

    res.send(await this.createProductUseCase.handle(body));
  }
}
