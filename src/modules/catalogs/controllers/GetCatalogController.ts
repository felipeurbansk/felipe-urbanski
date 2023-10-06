import GetCatalogS3ByOwnerIdUseCase from "@catalogs/use-cases/GetCatalogS3ByOwnerIdUseCase";
import { GET, route } from "awilix-express";
import { Request } from "express";
import { Response } from "express-serve-static-core";

@route("/catalogs")
export default class GetCatalogController {
  private getCatalogS3ByOwnerIdUseCase: GetCatalogS3ByOwnerIdUseCase;

  constructor({
    getCatalogS3ByOwnerIdUseCase,
  }: {
    getCatalogS3ByOwnerIdUseCase: GetCatalogS3ByOwnerIdUseCase;
  }) {
    this.getCatalogS3ByOwnerIdUseCase = getCatalogS3ByOwnerIdUseCase;
  }

  @route("/:owner_id")
  @GET()
  async handle(req: Request, res: Response) {
    const { owner_id } = req.params;

    res.send(await this.getCatalogS3ByOwnerIdUseCase.handle({ _id: owner_id }));
  }
}
