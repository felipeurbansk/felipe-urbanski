import UserRepository from "@users/database/mongo/repositories/UserRepository";
import { IUser } from "@users/interfaces/UserInterface";
import { IUserRepository } from "@users/database/mongo/repositories/IUserRepository";

export default class UpdateUserService {
  public userRepository: IUserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  async execute(data: IUser): Promise<void> {
    return this.userRepository.update(data);
  }
}
