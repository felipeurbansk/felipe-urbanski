import { ICategory } from "@categories/interfaces/CategoryInterface";
import { IOwner } from "modules/owner/interfaces/OwnerInterface";
import { Document } from "mongoose";

export interface IProductId {
  _id: string;
}

export interface IProduct extends Document {
  _id: string;
  title: string;
  description: string;
  price: number;
  owner: IOwner;
  categories: [ICategory];
}

export interface ICreateProduct {
  title: string;
  description: string;
  price: number;
  owner_id: string;
  category_id?: string;
  categories?: [ICategory];
}

export interface ISyncProductWithCategoryProduct {
  _id: string;
  category_id: string;
}

export interface IFilterProduct {
  _id?: string;
  title?: string;
  price?: number;
}
