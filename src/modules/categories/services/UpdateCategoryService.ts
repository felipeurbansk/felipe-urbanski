import CategoryRepository from "@categories/database/mongo/repositories/CategoryRepository";
import { ICategory } from "@categories/interfaces/CategoryInterface";
import { ICategoryRepository } from "@categories/database/mongo/repositories/ICategoryRepository";

export default class UpdateCategoryService {
  public categoryRepository: ICategoryRepository;

  constructor({
    categoryRepository,
  }: {
    categoryRepository: CategoryRepository;
  }) {
    this.categoryRepository = categoryRepository;
  }

  async execute(data: ICategory): Promise<void> {
    return this.categoryRepository.update(data);
  }
}
