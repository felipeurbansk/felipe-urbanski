import { route, GET } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";
import GetOwnersUseCase from "@owners/use-cases/GetOwnersUseCase";

@route("/owners")
export default class GetOwnersController {
  getOwnersUseCase: GetOwnersUseCase;

  constructor({ getOwnersUseCase }: { getOwnersUseCase: GetOwnersUseCase }) {
    this.getOwnersUseCase = getOwnersUseCase;
  }

  @route("/")
  @GET()
  async handle(req: Request, res: Response) {
    const { name, email } = req.query;

    res.send(
      await this.getOwnersUseCase.handle({
        name: String(name),
        email: String(email),
      })
    );
  }
}
