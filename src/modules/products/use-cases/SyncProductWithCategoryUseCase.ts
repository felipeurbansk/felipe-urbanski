import GetCategoryByIdService from "@categories/services/GetCategoryByIdService";
import {
  IProduct,
  ISyncProductWithCategoryProduct,
} from "@products/interfaces/ProductInterface";
import GetProductByIdService from "@products/services/GetProductByIdService";
import UpdateProductService from "@products/services/UpdateProductService";

export default class SyncProductWithCategoryUseCase {
  private getProductByIdService: GetProductByIdService;
  private getCategoryByIdService: GetCategoryByIdService;

  constructor({
    getProductByIdService,
    getCategoryByIdService,
  }: {
    getProductByIdService: GetProductByIdService;
    getCategoryByIdService: GetCategoryByIdService;
  }) {
    this.getProductByIdService = getProductByIdService;
    this.getCategoryByIdService = getCategoryByIdService;
  }

  public async handle(
    data: ISyncProductWithCategoryProduct
  ): Promise<IProduct> {
    const persistedProduct = await this.getProductByIdService.execute({
      _id: data._id,
    });

    if (!persistedProduct) {
      throw new Error(`Product ${data._id} does not exist`);
    }

    const categoryExistsInProduct = persistedProduct.categories.find(
      (categorie) => categorie._id.toString() === data.category_id
    );

    if (categoryExistsInProduct) {
      throw new Error(
        `Category ${data.category_id} already related to the product`
      );
    }

    const persistedCategory = await this.getCategoryByIdService.execute({
      _id: data.category_id,
    });

    if (!persistedCategory) {
      throw new Error(`Category ${data._id} does not exist`);
    }

    persistedProduct.categories.push(persistedCategory);

    await persistedProduct.save();

    return persistedProduct;
  }
}
