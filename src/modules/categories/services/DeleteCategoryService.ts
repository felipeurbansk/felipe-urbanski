import CategoryRepository from "@categories/database/mongo/repositories/CategoryRepository";
import { ICategoryId } from "@categories/interfaces/CategoryInterface";
import { ICategoryRepository } from "@categories/database/mongo/repositories/ICategoryRepository";

export default class DeleteCategoryService {
  public categoryRepository: ICategoryRepository;

  constructor({
    categoryRepository,
  }: {
    categoryRepository: CategoryRepository;
  }) {
    this.categoryRepository = categoryRepository;
  }

  async execute({ _id }: ICategoryId): Promise<void> {
    return this.categoryRepository.delete({ _id });
  }
}
