import { IProductId } from "@products/interfaces/ProductInterface";
import DeleteProductService from "@products/services/DeleteProductService";

export default class DeleteProductUseCase {
  private deleteProductService: DeleteProductService;

  constructor({
    deleteProductService,
  }: {
    deleteProductService: DeleteProductService;
  }) {
    this.deleteProductService = deleteProductService;
  }

  public async handle({ _id }: IProductId): Promise<void> {
    return this.deleteProductService.execute({ _id });
  }
}
