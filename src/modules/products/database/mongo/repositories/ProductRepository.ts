import {
  ICreateProduct,
  IFilterProduct,
  IProduct,
  IProductId,
} from "@products/interfaces/ProductInterface";
import { IProductRepository } from "@products/database/mongo/repositories/IProductRepository";
import ProductModel from "../models/ProductModel";
import CategoryModel from "@categories/database/mongo/models/CategoryModel";

export default class ProductRepository implements IProductRepository {
  private readonly productModel: ProductModel;
  private readonly populate: any;

  constructor({
    productModel,
    categoryModel,
  }: {
    productModel: ProductModel;
    categoryModel: CategoryModel;
  }) {
    this.productModel = productModel;
    this.populate = {
      path: "categories",
      model: categoryModel.model,
    };
  }

  async create(data: ICreateProduct): Promise<IProduct> {
    return await this.productModel.model.create(data);
  }

  async delete({ _id }: IProductId): Promise<void> {
    await this.productModel.model.deleteOne({ _id });
  }

  async filter(data: IFilterProduct): Promise<IProduct[] | null> {
    const persitedProducts = await this.productModel.model.find(data);

    return persitedProducts;
  }

  async getAll(): Promise<IProduct[] | null> {
    const persitedProducts = await this.productModel.model
      .find({})
      .populate(this.populate);

    return persitedProducts;
  }

  async getById({ _id }: IProductId): Promise<IProduct | null> {
    const persistedProduct = await this.productModel.model
      .findById(_id)
      .populate(this.populate);

    return persistedProduct;
  }

  async update(data: IProduct): Promise<void> {
    await this.productModel.model.findOneAndUpdate({ _id: data._id }, data);
  }
}
