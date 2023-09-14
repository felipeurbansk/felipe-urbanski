import ProductRepository from "@products/database/mongo/repositories/ProductRepository";
import { IProduct, IProductId } from "@products/interfaces/ProductInterface";
import { IProductRepository } from "@products/database/mongo/repositories/IProductRepository";

export default class GetProductByIdService {
  public productRepository: IProductRepository;

  constructor({ productRepository }: { productRepository: ProductRepository }) {
    this.productRepository = productRepository;
  }

  async execute({ _id }: IProductId): Promise<IProduct | null> {
    return this.productRepository.getById({ _id });
  }
}
