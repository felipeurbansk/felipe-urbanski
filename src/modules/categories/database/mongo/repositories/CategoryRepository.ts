import { ICategoryRepository } from "@categories/database/mongo/repositories/ICategoryRepository";
import CategoryModel from "../models/CategoryModel";
import {
  IFilterCategory,
  ICategory,
  ICategoryId,
  ICreateCategory,
} from "@categories/interfaces/CategoryInterface";

export default class CategoryRepository implements ICategoryRepository {
  private readonly categoryModel: CategoryModel;
  private readonly populate: any;

  constructor({ categoryModel }: { categoryModel: CategoryModel }) {
    this.categoryModel = categoryModel;
  }

  async create(data: ICreateCategory): Promise<ICategory> {
    return await this.categoryModel.model.create(data);
  }

  async delete({ _id }: ICategoryId): Promise<void> {
    await this.categoryModel.model.deleteOne({ _id });
  }

  async filter(data: IFilterCategory): Promise<ICategory[] | null> {
    const persitedCategories = await this.categoryModel.model.find(data);

    return persitedCategories;
  }

  async getAll(): Promise<ICategory[] | null> {
    const persitedCategories = await this.categoryModel.model.find({});

    return persitedCategories;
  }

  async getById({ _id }: ICategoryId): Promise<ICategory | null> {
    const persistedCategory = await this.categoryModel.model.findById(_id);

    return persistedCategory;
  }

  async update(data: ICategory): Promise<void> {
    await this.categoryModel.model.findOneAndUpdate({ _id: data._id }, data);
  }
}
