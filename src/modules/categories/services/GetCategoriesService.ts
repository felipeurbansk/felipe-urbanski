import CategoryRepository from "@categories/database/mongo/repositories/CategoryRepository";
import {
  IFilterCategory,
  ICategory,
} from "@categories/interfaces/CategoryInterface";
import { ICategoryRepository } from "@categories/database/mongo/repositories/ICategoryRepository";

export default class GetCategoriesService {
  public categoryRepository: ICategoryRepository;

  constructor({
    categoryRepository,
  }: {
    categoryRepository: CategoryRepository;
  }) {
    this.categoryRepository = categoryRepository;
  }

  async execute(data: IFilterCategory): Promise<ICategory[] | null> {
    return this.categoryRepository.filter(data);
  }
}
