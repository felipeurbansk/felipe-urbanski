import { Model, Schema } from "mongoose";
import { ICategory } from "@categories/interfaces/CategoryInterface";
import MongooseProvider from "infrastructure/database/mongoose/MongooseProvider";

export default class CategoryModel {
  public model: Model<ICategory>;
  private categorySchema: Schema;

  constructor({
    categorySchema,
    mongooseProvider,
  }: {
    categorySchema: Schema;
    mongooseProvider: MongooseProvider;
  }) {
    this.categorySchema = categorySchema;

    this.model = mongooseProvider.connection.model<ICategory>(
      "categories",
      this.categorySchema
    );

    this.model.createIndexes();
  }
}
