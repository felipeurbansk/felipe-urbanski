import { IProduct } from "@products/interfaces/ProductInterface";
import UpdateProductService from "@products/services/UpdateProductService";

export default class UpdateProductUseCase {
  private updateProductService: UpdateProductService;

  constructor({
    updateProductService,
  }: {
    updateProductService: UpdateProductService;
  }) {
    this.updateProductService = updateProductService;
  }

  public async handle(data: IProduct): Promise<void> {
    return this.updateProductService.execute(data);
  }
}
