import {
  IFilterProduct,
  IProduct,
} from "@products/interfaces/ProductInterface";
import GetProductsService from "@products/services/GetProductsService";

export default class GetProductsUseCase {
  private getProductsService: GetProductsService;

  constructor({
    getProductsService,
  }: {
    getProductsService: GetProductsService;
  }) {
    this.getProductsService = getProductsService;
  }

  public async handle(data: IFilterProduct): Promise<IProduct[] | null> {
    return this.getProductsService.execute(data);
  }
}
