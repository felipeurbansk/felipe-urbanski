import { ICategory } from "@categories/interfaces/CategoryInterface";
import UpdateCategoryService from "@categories/services/UpdateCategoryService";

export default class UpdateCategoryUseCase {
  private updateCategoryService: UpdateCategoryService;

  constructor({
    updateCategoryService,
  }: {
    updateCategoryService: UpdateCategoryService;
  }) {
    this.updateCategoryService = updateCategoryService;
  }

  public async handle(data: ICategory): Promise<void> {
    return this.updateCategoryService.execute(data);
  }
}
