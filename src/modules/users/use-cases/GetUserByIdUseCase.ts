import { IUser, IUserId } from "@users/interfaces/UserInterface";
import GetUserByIdService from "@users/services/GetUserByIdService";

export default class GetUserByIdUseCase {
  private getUserByIdService: GetUserByIdService;

  constructor({
    getUserByIdService,
  }: {
    getUserByIdService: GetUserByIdService;
  }) {
    this.getUserByIdService = getUserByIdService;
  }

  public async handle({ _id }: IUserId): Promise<IUser | null> {
    return this.getUserByIdService.execute({ _id });
  }
}
