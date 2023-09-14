import ProductRepository from "@products/database/mongo/repositories/ProductRepository";
import { IProduct } from "@products/interfaces/ProductInterface";
import { IProductRepository } from "@products/database/mongo/repositories/IProductRepository";

export default class GetAllProductsService {
  public productRepository: IProductRepository;

  constructor({ productRepository }: { productRepository: ProductRepository }) {
    this.productRepository = productRepository;
  }

  async execute(): Promise<IProduct[] | null> {
    return this.productRepository.getAll();
  }
}
