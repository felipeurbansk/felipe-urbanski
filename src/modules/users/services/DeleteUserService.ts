import UserRepository from "@users/database/mongo/repositories/UserRepository";
import { IUserId } from "@users/interfaces/UserInterface";
import { IUserRepository } from "@users/database/mongo/repositories/IUserRepository";

export default class DeleteUserService {
  public userRepository: IUserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  async execute({ _id }: IUserId): Promise<void> {
    return this.userRepository.delete({ _id });
  }
}