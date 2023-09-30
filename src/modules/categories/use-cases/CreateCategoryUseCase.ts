import {
  ICreateCategory,
  ICategory,
} from "@categories/interfaces/CategoryInterface";
import CreateCategoryService from "@categories/services/CreateCategoryService";
import GetOwnerByIdService from "modules/owner/services/GetOwnerByIdService";

export default class CreateCategoryUseCase {
  private createCategoryService: CreateCategoryService;
  private getOwnerByIdService: GetOwnerByIdService;

  constructor({
    createCategoryService,
    getOwnerByIdService,
  }: {
    createCategoryService: CreateCategoryService;
    getOwnerByIdService: GetOwnerByIdService;
  }) {
    this.createCategoryService = createCategoryService;
    this.getOwnerByIdService = getOwnerByIdService;
  }

  public async handle(data: ICreateCategory): Promise<ICategory> {
    const persistedOwner = await this.getOwnerByIdService.execute({
      _id: data.owner_id,
    });

    if (!persistedOwner) {
      throw new Error(`Owner ${data.owner_id} does not exist`);
    }

    const persistedCategory = await this.createCategoryService.execute(data);

    persistedOwner.categories?.push(persistedCategory);

    await persistedOwner.save();

    return persistedCategory;
  }
}
