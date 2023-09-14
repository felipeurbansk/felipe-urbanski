import {
  ICreateCategory,
  IFilterCategory,
  ICategory,
  ICategoryId,
} from "@categories/interfaces/CategoryInterface";

export interface ICategoryRepository {
  create(data: ICreateCategory): Promise<ICategory>;
  delete({ _id }: ICategoryId): Promise<void>;
  filter(data: IFilterCategory): Promise<ICategory[] | null>;
  getAll(): Promise<ICategory[] | null>;
  getById({ _id }: ICategoryId): Promise<ICategory | null>;
  update(data: ICategory): Promise<void>;
}
