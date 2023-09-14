import { Model, Schema } from "mongoose";
import { IUser } from "@users/interfaces/UserInterface";
import MongooseProvider from "infrastructure/database/mongoose/MongooseProvider";

export default class UserModel {
  public model: Model<IUser>;
  private userSchema: Schema;

  constructor({
    userSchema,
    mongooseProvider,
  }: {
    userSchema: Schema;
    mongooseProvider: MongooseProvider;
  }) {
    this.userSchema = userSchema;

    this.model = mongooseProvider.connection.model<IUser>(
      "users",
      this.userSchema
    );

    this.model.createIndexes();
  }
}
