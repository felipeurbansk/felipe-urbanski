import ProductRepository from "@products/database/mongo/repositories/ProductRepository";
import { IProduct } from "@products/interfaces/ProductInterface";
import { IProductRepository } from "@products/database/mongo/repositories/IProductRepository";

export default class UpdateProductService {
  public productRepository: IProductRepository;

  constructor({ productRepository }: { productRepository: ProductRepository }) {
    this.productRepository = productRepository;
  }

  async execute(data: IProduct): Promise<void> {
    return this.productRepository.update(data);
  }
}
