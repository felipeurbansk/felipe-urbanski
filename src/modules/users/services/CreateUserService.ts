import UserRepository from "@users/database/mongo/repositories/UserRepository";
import { ICreateUser, IUser } from "@users/interfaces/UserInterface";
import { IUserRepository } from "@users/database/mongo/repositories/IUserRepository";

export default class CreateUserService {
  public userRepository: IUserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  async execute(data: ICreateUser): Promise<IUser> {
    return this.userRepository.create(data);
  }
}
