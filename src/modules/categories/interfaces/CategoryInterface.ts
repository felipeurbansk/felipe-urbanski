import { Document } from "mongoose";

export interface ICategoryId {
  _id: string;
}

export interface ICategory extends Document {
  _id: string;
  title: string;
  description: string;
}

export interface ICreateCategory {
  title: string;
  description: string;
  user_id: string;
}

export interface IFilterCategory {
  _id?: string;
  title?: string;
}
