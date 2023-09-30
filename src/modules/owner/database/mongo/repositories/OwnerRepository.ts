import {
  IFilterOwner,
  IOwner,
  IOwnerId,
} from "modules/owner/interfaces/OwnerInterface";
import { IOwnerRepository } from "modules/owner/database/mongo/repositories/IOwnerRepository";
import OwnerModel from "../models/OwnerModel";
import ProductModel from "@products/database/mongo/models/ProductModel";
import CategoryModel from "@categories/database/mongo/models/CategoryModel";

export default class OwnerRepository implements IOwnerRepository {
  private readonly ownerModel: OwnerModel;
  private readonly populate: any;

  constructor({
    ownerModel,
    productModel,
    categoryModel,
  }: {
    ownerModel: OwnerModel;
    productModel: ProductModel;
    categoryModel: CategoryModel;
  }) {
    this.ownerModel = ownerModel;

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

  async create(data: IOwner): Promise<IOwner> {
    return await this.ownerModel.model.create(data);
  }

  async delete({ _id }: IOwnerId): Promise<void> {
    await this.ownerModel.model.deleteOne({ _id });
  }

  async filter(data: IFilterOwner): Promise<IOwner[] | null> {
    const persitedOwners = await this.ownerModel.model
      .find(data)
      .populate(this.populate);

    return persitedOwners;
  }

  async getAll(): Promise<IOwner[] | null> {
    const persitedOwners = await this.ownerModel.model
      .find({})
      .populate(this.populate);

    return persitedOwners;
  }

  async getByEmail({ email }: IOwner): Promise<IOwner | null> {
    const persistedOwner = await this.ownerModel.model
      .findOne({
        email: email,
      })
      .populate(this.populate);

    return persistedOwner;
  }

  async getById({ _id }: IOwnerId): Promise<IOwner | null> {
    const persistedOwner = await this.ownerModel.model
      .findById(_id)
      .populate(this.populate);

    return persistedOwner;
  }

  async update(data: IOwner): Promise<void> {
    await this.ownerModel.model.findOneAndUpdate({ _id: data._id }, data);
  }
}
