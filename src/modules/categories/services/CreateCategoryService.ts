import CategoryRepository from "@categories/database/mongo/repositories/CategoryRepository";
import {
  ICreateCategory,
  ICategory,
} from "@categories/interfaces/CategoryInterface";
import { ICategoryRepository } from "@categories/database/mongo/repositories/ICategoryRepository";

export default class CreateCategoryService {
  public categoryRepository: ICategoryRepository;

  constructor({
    categoryRepository,
  }: {
    categoryRepository: CategoryRepository;
  }) {
    this.categoryRepository = categoryRepository;
  }

  async execute(data: ICreateCategory): Promise<ICategory> {
    return this.categoryRepository.create(data);
  }
}
