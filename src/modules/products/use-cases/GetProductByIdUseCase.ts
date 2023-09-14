import { IProduct, IProductId } from "@products/interfaces/ProductInterface";
import GetProductByIdService from "@products/services/GetProductByIdService";

export default class GetProductByIdUseCase {
  private getProductByIdService: GetProductByIdService;

  constructor({
    getProductByIdService,
  }: {
    getProductByIdService: GetProductByIdService;
  }) {
    this.getProductByIdService = getProductByIdService;
  }

  public async handle({ _id }: IProductId): Promise<IProduct | null> {
    return this.getProductByIdService.execute({ _id });
  }
}
