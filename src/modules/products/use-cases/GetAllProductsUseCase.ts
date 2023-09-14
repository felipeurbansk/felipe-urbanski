import { IProduct } from "@products/interfaces/ProductInterface";
import GetAllProductsService from "@products/services/GetAllProductsService";

export default class GetAllProductsUseCase {
  private getAllProductsService: GetAllProductsService;

  constructor({
    getAllProductsService,
  }: {
    getAllProductsService: GetAllProductsService;
  }) {
    this.getAllProductsService = getAllProductsService;
  }

  public async handle(): Promise<IProduct[] | null> {
    return this.getAllProductsService.execute();
  }
}
