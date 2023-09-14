import {
  IFilterCategory,
  ICategory,
} from "@categories/interfaces/CategoryInterface";
import GetCategoriesService from "@categories/services/GetCategoriesService";

export default class GetCategoriesUseCase {
  private getCategoriesService: GetCategoriesService;

  constructor({
    getCategoriesService,
  }: {
    getCategoriesService: GetCategoriesService;
  }) {
    this.getCategoriesService = getCategoriesService;
  }

  public async handle(data: IFilterCategory): Promise<ICategory[] | null> {
    return this.getCategoriesService.execute(data);
  }
}
