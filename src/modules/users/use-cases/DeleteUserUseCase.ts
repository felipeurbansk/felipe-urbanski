import { IUserId } from "@users/interfaces/UserInterface";
import DeleteUserService from "@users/services/DeleteUserService";

export default class DeleteUserUseCase {
  private deleteUserService: DeleteUserService;

  constructor({ deleteUserService }: { deleteUserService: DeleteUserService }) {
    this.deleteUserService = deleteUserService;
  }

  public async handle({ _id }: IUserId): Promise<void> {
    return this.deleteUserService.execute({ _id });
  }
}
