import { IUser } from "@users/interfaces/UserInterface";
import UpdateUserService from "@users/services/UpdateUserService";

export default class UpdateUserUseCase {
  private updateUserService: UpdateUserService;

  constructor({ updateUserService }: { updateUserService: UpdateUserService }) {
    this.updateUserService = updateUserService;
  }

  public async handle(data: IUser): Promise<void> {
    return this.updateUserService.execute(data);
  }
}
