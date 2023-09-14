import { ICategory } from "@categories/interfaces/CategoryInterface";
import { IProduct } from "@products/interfaces/ProductInterface";
import { Document } from "mongoose";

export interface IUserId {
  _id: string;
}

export interface IUserEmail {
  email: string;
}

export interface IUser extends Document {
  _id: string;
  email: string;
  name: string;
  categories?: [ICategory];
  products?: [IProduct];
}

export interface ICreateUser {
  name: string;
  email: string;
  // categories?: [ICategory];
  // products?: [IProduct];
}

export interface IFilterUser {
  _id?: string;
  name?: string;
  email?: string;
}
