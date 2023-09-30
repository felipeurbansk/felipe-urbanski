import { Model, Schema } from "mongoose";
import { IOwner } from "@owners/interfaces/OwnerInterface";
import MongooseProvider from "infrastructure/database/mongoose/MongooseProvider";

export default class OwnerModel {
  public model: Model<IOwner>;
  private ownerSchema: Schema;

  constructor({
    ownerSchema,
    mongooseProvider,
  }: {
    ownerSchema: Schema;
    mongooseProvider: MongooseProvider;
  }) {
    this.ownerSchema = ownerSchema;

    this.model = mongooseProvider.connection.model<IOwner>(
      "owners",
      this.ownerSchema
    );

    this.model.createIndexes();
  }
}
