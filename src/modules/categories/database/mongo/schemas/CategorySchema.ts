import { SchemaDefinition } from "mongoose";
import Schema from "./Schema";

const categorySchema = new Schema<SchemaDefinition>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    strict: false,
  }
);

export default categorySchema;
