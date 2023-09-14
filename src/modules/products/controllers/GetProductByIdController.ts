import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetProductByIdUseCase from "@products/use-cases/GetProductByIdUseCase";

@route("/products")
export default class GetProductByIdController {
  getProductByIdUseCase: GetProductByIdUseCase;

  constructor({
    getProductByIdUseCase,
  }: {
    getProductByIdUseCase: GetProductByIdUseCase;
  }) {
    this.getProductByIdUseCase = getProductByIdUseCase;
  }

  @route("/:_id")
  @GET()
  async handle(req: Request, res: Response) {
    const { _id } = req.params;

    res.send(await this.getProductByIdUseCase.handle({ _id }));
  }
}
