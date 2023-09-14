import {
  ICategory,
  ICategoryId,
} from "@categories/interfaces/CategoryInterface";
import GetCategoryByIdService from "@categories/services/GetCategoryByIdService";

export default class GetCategoryByIdUseCase {
  private getCategoryByIdService: GetCategoryByIdService;

  constructor({
    getCategoryByIdService,
  }: {
    getCategoryByIdService: GetCategoryByIdService;
  }) {
    this.getCategoryByIdService = getCategoryByIdService;
  }

  public async handle({ _id }: ICategoryId): Promise<ICategory | null> {
    return this.getCategoryByIdService.execute({ _id });
  }
}
