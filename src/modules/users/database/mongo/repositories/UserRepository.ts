import { IFilterUser, IUser, IUserId } from "@users/interfaces/UserInterface";
import { IUserRepository } from "@users/database/mongo/repositories/IUserRepository";
import UserModel from "../models/UserModel";
import ProductModel from "@products/database/mongo/models/ProductModel";
import CategoryModel from "@categories/database/mongo/models/CategoryModel";

export default class UserRepository implements IUserRepository {
  private readonly userModel: UserModel;
  private readonly populate: any;

  constructor({
    userModel,
    productModel,
    categoryModel,
  }: {
    userModel: UserModel;
    productModel: ProductModel;
    categoryModel: CategoryModel;
  }) {
    this.userModel = userModel;

    this.populate = [
      {
        path: "products",
        model: productModel.model,
      },
      {
        path: "categories",
        model: categoryModel.model,
      },
    ];
  }

  async create(data: IUser): Promise<IUser> {
    return await this.userModel.model.create(data);
  }

  async delete({ _id }: IUserId): Promise<void> {
    await this.userModel.model.deleteOne({ _id });
  }

  async filter(data: IFilterUser): Promise<IUser[] | null> {
    const persitedUsers = await this.userModel.model
      .find(data)
      .populate(this.populate);

    return persitedUsers;
  }

  async getAll(): Promise<IUser[] | null> {
    const persitedUsers = await this.userModel.model
      .find({})
      .populate(this.populate);

    return persitedUsers;
  }

  async getByEmail({ email }: IUser): Promise<IUser | null> {
    const persistedUser = await this.userModel.model
      .findOne({
        email: email,
      })
      .populate(this.populate);

    return persistedUser;
  }

  async getById({ _id }: IUserId): Promise<IUser | null> {
    const persistedUser = await this.userModel.model
      .findById(_id)
      .populate(this.populate);

    return persistedUser;
  }

  async update(data: IUser): Promise<void> {
    await this.userModel.model.findOneAndUpdate({ _id: data._id }, data);
  }
}
