import GetCategoryByIdService from "@categories/services/GetCategoryByIdService";
import ProductCreatedPublisher from "@products/amqp/pub/ProductCreatedPublisher";
import {
  ICreateProduct,
  IProduct,
} from "@products/interfaces/ProductInterface";
import CreateProductService from "@products/services/CreateProductService";
import GetOwnerByIdService from "@owners/services/GetOwnerByIdService";
import S3Provider from "infrastructure/aws/s3/S3Provider";

export default class CreateProductUseCase {
  private createProductService: CreateProductService;
  private getOwnerByIdService: GetOwnerByIdService;
  private getCategoryByIdService: GetCategoryByIdService;
  private productCreatedPublisher: ProductCreatedPublisher;
  private s3Provider: S3Provider;

  constructor({
    createProductService,
    getOwnerByIdService,
    getCategoryByIdService,
    productCreatedPublisher,
    s3Provider,
  }: {
    createProductService: CreateProductService;
    getOwnerByIdService: GetOwnerByIdService;
    getCategoryByIdService: GetCategoryByIdService;
    productCreatedPublisher: ProductCreatedPublisher;
    s3Provider: S3Provider;
  }) {
    this.createProductService = createProductService;
    this.getOwnerByIdService = getOwnerByIdService;
    this.getCategoryByIdService = getCategoryByIdService;
    this.productCreatedPublisher = productCreatedPublisher;
    this.s3Provider = s3Provider;
  }

  public async handle(data: ICreateProduct): Promise<IProduct> {
    let persistedCategory;

    const persistedOwner = await this.getOwnerByIdService.execute({
      _id: data.owner_id,
    });

    if (!persistedOwner) {
      throw new Error(`Owner ${data.owner_id} does not exist`);
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

    persistedOwner.products?.push(persistedProduct);

    await persistedOwner.save();

    await this.s3Provider.uploadFile(
      "anotai-bucket",
      `catalog_${persistedOwner._id}.json`,
      persistedOwner
    );

    await this.productCreatedPublisher.publish(persistedProduct);

    return persistedProduct;
  }
}
