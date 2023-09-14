import { Model, Schema } from "mongoose";
import { IProduct } from "@products/interfaces/ProductInterface";
import MongooseProvider from "infrastructure/database/mongoose/MongooseProvider";

export default class ProductModel {
  public model: Model<IProduct>;
  private productSchema: Schema;

  constructor({
    productSchema,
    mongooseProvider,
  }: {
    productSchema: Schema;
    mongooseProvider: MongooseProvider;
  }) {
    this.productSchema = productSchema;

    this.model = mongooseProvider.connection.model<IProduct>(
      "products",
      this.productSchema
    );

    this.model.createIndexes();
  }
}
