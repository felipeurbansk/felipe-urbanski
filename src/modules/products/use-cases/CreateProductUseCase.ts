import GetCategoryByIdService from "@categories/services/GetCategoryByIdService";
import ProductCreatedPublisher from "@products/amqp/pub/ProductCreatedPublisher";
import {
  ICreateProduct,
  IProduct,
} from "@products/interfaces/ProductInterface";
import CreateProductService from "@products/services/CreateProductService";
import GetUserByIdService from "@users/services/GetUserByIdService";

export default class CreateProductUseCase {
  private createProductService: CreateProductService;
  private getUserByIdService: GetUserByIdService;
  private getCategoryByIdService: GetCategoryByIdService;
  private productCreatedPublisher: ProductCreatedPublisher;

  constructor({
    createProductService,
    getUserByIdService,
    getCategoryByIdService,
    productCreatedPublisher,
  }: {
    createProductService: CreateProductService;
    getUserByIdService: GetUserByIdService;
    getCategoryByIdService: GetCategoryByIdService;
    productCreatedPublisher: ProductCreatedPublisher;
  }) {
    this.createProductService = createProductService;
    this.getUserByIdService = getUserByIdService;
    this.getCategoryByIdService = getCategoryByIdService;
    this.productCreatedPublisher = productCreatedPublisher;
  }

  public async handle(data: ICreateProduct): Promise<IProduct> {
    let persistedCategory;

    const persistedUser = await this.getUserByIdService.execute({
      _id: data.user_id,
    });

    if (!persistedUser) {
      throw new Error(`User ${data.user_id} does not exist`);
    }

    if (typeof data.category_id !== "undefined" && data.category_id !== "") {
      persistedCategory = await this.getCategoryByIdService.execute({
        _id: data.category_id,
      });

      if (!persistedCategory) {
        throw new Error(`Category ${data.category_id} does not exist`);
      }
    }

    const persistedProduct = await this.createProductService.execute(data);

    if (persistedCategory) {
      persistedProduct.categories?.push(persistedCategory);
      await persistedProduct.save();
    }

    persistedUser.products?.push(persistedProduct);

    await persistedUser.save();

    await this.productCreatedPublisher.publish(persistedProduct);

    return persistedProduct;
  }
}
