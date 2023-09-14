import UserRepository from "@users/database/mongo/repositories/UserRepository";
import { IFilterUser, IUser } from "@users/interfaces/UserInterface";
import { IUserRepository } from "@users/database/mongo/repositories/IUserRepository";

export default class GetUsersService {
  public userRepository: IUserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  async execute(data: IFilterUser): Promise<IUser[] | null> {
    return this.userRepository.filter(data);
  }
}
