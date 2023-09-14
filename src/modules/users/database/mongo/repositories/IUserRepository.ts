import {
  ICreateUser,
  IFilterUser,
  IUser,
  IUserId,
} from "@users/interfaces/UserInterface";

export interface IUserRepository {
  create(data: ICreateUser): Promise<IUser>;
  delete({ _id }: IUserId): Promise<void>;
  filter(data: IFilterUser): Promise<IUser[] | null>;
  getAll(): Promise<IUser[] | null>;
  getByEmail({ email }: IUser): Promise<IUser | null>;
  getById({ _id }: IUserId): Promise<IUser | null>;
  update(data: IUser): Promise<void>;
}
