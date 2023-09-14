import { SchemaDefinition } from "mongoose";
import Schema from "./Schema";

const productSchema = new Schema<SchemaDefinition>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    categories: [{ type: Schema.Types.ObjectId, ref: "categories" }],
  },
  {
    strict: false,
  }
);

export default productSchema;
