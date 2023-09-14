import { ICategoryId } from "@categories/interfaces/CategoryInterface";
import DeleteCategoryService from "@categories/services/DeleteCategoryService";

export default class DeleteCategoryUseCase {
  private deleteCategoryService: DeleteCategoryService;

  constructor({
    deleteCategoryService,
  }: {
    deleteCategoryService: DeleteCategoryService;
  }) {
    this.deleteCategoryService = deleteCategoryService;
  }

  public async handle({ _id }: ICategoryId): Promise<void> {
    return this.deleteCategoryService.execute({ _id });
  }
}
