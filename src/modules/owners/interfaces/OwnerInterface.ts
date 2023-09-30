import { ICategory } from "@categories/interfaces/CategoryInterface";
import { IProduct } from "@products/interfaces/ProductInterface";
import { Document } from "mongoose";

export interface IOwnerId {
  _id: string;
}

export interface IOwnerEmail {
  email: string;
}

export interface IOwner extends Document {
  _id: string;
  email: string;
  name: string;
  categories?: [ICategory];
  products?: [IProduct];
}

export interface ICreateOwner {
  name: string;
  email: string;
  // categories?: [ICategory];
  // products?: [IProduct];
}

export interface IFilterOwner {
  _id?: string;
  name?: string;
  email?: string;
}
