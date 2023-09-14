import ProductRepository from "@products/database/mongo/repositories/ProductRepository";
import { IProductId } from "@products/interfaces/ProductInterface";
import { IProductRepository } from "@products/database/mongo/repositories/IProductRepository";

export default class DeleteProductService {
  public productRepository: IProductRepository;

  constructor({ productRepository }: { productRepository: ProductRepository }) {
    this.productRepository = productRepository;
  }

  async execute({ _id }: IProductId): Promise<void> {
    return this.productRepository.delete({ _id });
  }
}
