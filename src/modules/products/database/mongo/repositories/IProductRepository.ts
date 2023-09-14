import {
  ICreateProduct,
  IFilterProduct,
  IProduct,
  IProductId,
} from "@products/interfaces/ProductInterface";

export interface IProductRepository {
  create(data: ICreateProduct): Promise<IProduct>;
  delete({ _id }: IProductId): Promise<void>;
  filter(data: IFilterProduct): Promise<IProduct[] | null>;
  getAll(): Promise<IProduct[] | null>;
  getById({ _id }: IProductId): Promise<IProduct | null>;
  update(data: IProduct): Promise<void>;
}
