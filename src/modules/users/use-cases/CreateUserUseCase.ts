import { ICreateUser, IUser } from "@users/interfaces/UserInterface";
import CreateUserService from "@users/services/CreateUserService";

export default class CreateUserUseCase {
  private createUserService: CreateUserService;

  constructor({ createUserService }: { createUserService: CreateUserService }) {
    this.createUserService = createUserService;
  }

  public async handle(data: ICreateUser): Promise<IUser> {
    return this.createUserService.execute(data);
  }
}
