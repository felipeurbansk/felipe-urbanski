import {
  DefaultSchemaOptions,
  Schema as MongooseSchema,
  SchemaOptions,
} from "mongoose";

export default class Schema<ICategory> extends MongooseSchema {
  constructor(schema: ICategory, options: SchemaOptions) {
    const defaultOptions = {
      _id: true,
      id: false,
      minimize: false,
      strict: "throw",
      validateBeforeSave: true,
    };

    super(
      schema as MongooseSchema,
      {
        ...defaultOptions,
        ...options,
      } as DefaultSchemaOptions
    );
  }
}
