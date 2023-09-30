import { SchemaDefinition } from "mongoose";
import Schema from "./Schema";

const ownerSchema = new Schema<SchemaDefinition>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    categories: [{ type: Schema.Types.ObjectId, ref: "categories" }],
    products: [{ type: Schema.Types.ObjectId, ref: "products" }],
  },
  {
    strict: false,
  }
);

export default ownerSchema;
