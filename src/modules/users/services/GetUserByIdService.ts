import UserRepository from "@users/database/mongo/repositories/UserRepository";
import { IUser, IUserId } from "@users/interfaces/UserInterface";
import { IUserRepository } from "@users/database/mongo/repositories/IUserRepository";
import { Document } from "mongoose";

export default class GetUserByIdService {
  public userRepository: IUserRepository;

  constructor({ userRepository }: { userRepository: UserRepository }) {
    this.userRepository = userRepository;
  }

  async execute({ _id }: IUserId): Promise<IUser | null> {
    return this.userRepository.getById({ _id });
  }
}
