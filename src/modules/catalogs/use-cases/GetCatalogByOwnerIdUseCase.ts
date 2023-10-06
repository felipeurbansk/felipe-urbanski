import { ICatalog } from "@catalogs/interfaces/CatalogInterface";
import { IOwnerId } from "@owners/interfaces/OwnerInterface";
import GetOwnerByIdService from "@owners/services/GetOwnerByIdService";

export default class GetCatalogByOwnerIdUseCase {
  private getOwnerByIdService: GetOwnerByIdService;

  constructor({
    getOwnerByIdService,
  }: {
    getOwnerByIdService: GetOwnerByIdService;
  }) {
    this.getOwnerByIdService = getOwnerByIdService;
  }

  public async handle({ _id }: IOwnerId): Promise<ICatalog> {
    const { products, name, email } = await this.getOwnerByIdService.execute({
      _id,
    });

    return {
      owner: {
        _id,
        name,
        email,
      },
      catalog: products,
    };
  }
}
