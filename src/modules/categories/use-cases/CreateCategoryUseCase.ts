import {
  ICreateCategory,
  ICategory,
} from "@categories/interfaces/CategoryInterface";
import CreateCategoryService from "@categories/services/CreateCategoryService";
import GetUserByIdService from "@users/services/GetUserByIdService";

export default class CreateCategoryUseCase {
  private createCategoryService: CreateCategoryService;
  private getUserByIdService: GetUserByIdService;

  constructor({
    createCategoryService,
    getUserByIdService,
  }: {
    createCategoryService: CreateCategoryService;
    getUserByIdService: GetUserByIdService;
  }) {
    this.createCategoryService = createCategoryService;
    this.getUserByIdService = getUserByIdService;
  }

  public async handle(data: ICreateCategory): Promise<ICategory> {
    const persistedUser = await this.getUserByIdService.execute({
      _id: data.user_id,
    });

    if (!persistedUser) {
      throw new Error(`User ${data.user_id} does not exist`);
    }

    const persistedCategory = await this.createCategoryService.execute(data);

    persistedUser.categories?.push(persistedCategory);

    await persistedUser.save();

    return persistedCategory;
  }
}
