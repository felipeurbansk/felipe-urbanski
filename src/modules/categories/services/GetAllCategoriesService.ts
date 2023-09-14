import CategoryRepository from "@categories/database/mongo/repositories/CategoryRepository";
import { ICategoryRepository } from "@categories/database/mongo/repositories/ICategoryRepository";
import { ICategory } from "@categories/interfaces/CategoryInterface";

export default class GetAllCategoriesService {
  public categoryRepository: ICategoryRepository;

  constructor({
    categoryRepository,
  }: {
    categoryRepository: CategoryRepository;
  }) {
    this.categoryRepository = categoryRepository;
  }

  async execute(): Promise<ICategory[] | null> {
    return this.categoryRepository.getAll();
  }
}
