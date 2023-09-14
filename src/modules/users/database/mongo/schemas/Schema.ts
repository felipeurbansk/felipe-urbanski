import {
  DefaultSchemaOptions,
  Schema as MongooseSchema,
  SchemaOptions,
} from "mongoose";

export default class Schema<IUser> extends MongooseSchema {
  constructor(schema: IUser, options: SchemaOptions) {
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
