import ProductRepository from "@products/database/mongo/repositories/ProductRepository";
import {
  IFilterProduct,
  IProduct,
} from "@products/interfaces/ProductInterface";
import { IProductRepository } from "@products/database/mongo/repositories/IProductRepository";

export default class GetProductsService {
  public productRepository: IProductRepository;

  constructor({ productRepository }: { productRepository: ProductRepository }) {
    this.productRepository = productRepository;
  }

  async execute(data: IFilterProduct): Promise<IProduct[] | null> {
    return this.productRepository.filter(data);
  }
}
