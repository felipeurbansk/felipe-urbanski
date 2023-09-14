import { IFilterUser, IUser } from "@users/interfaces/UserInterface";
import GetUsersService from "@users/services/GetUsersService";

export default class GetUsersUseCase {
  private getUsersService: GetUsersService;

  constructor({ getUsersService }: { getUsersService: GetUsersService }) {
    this.getUsersService = getUsersService;
  }

  public async handle(data: IFilterUser): Promise<IUser[] | null> {
    return this.getUsersService.execute(data);
  }
}
