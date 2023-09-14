import UserRepository from "@users/database/mongo/repositories/UserRepository";
import { IUserRepository } from "@users/database/mongo/repositories/IUserRepository";
import { IUser } from "@users/interfaces/UserInterface";

export default class GetAllUsersService {
  public userRepository: IUserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<IUser[] | null> {
    return this.userRepository.getAll();
  }
}
