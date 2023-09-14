import ProductRepository from "@products/database/mongo/repositories/ProductRepository";
import {
  ICreateProduct,
  IProduct,
} from "@products/interfaces/ProductInterface";
import { IProductRepository } from "@products/database/mongo/repositories/IProductRepository";

export default class CreateProductService {
  public productRepository: IProductRepository;

  constructor({ productRepository }: { productRepository: ProductRepository }) {
    this.productRepository = productRepository;
  }

  async execute(data: ICreateProduct): Promise<IProduct> {
    return this.productRepository.create(data);
  }
}
