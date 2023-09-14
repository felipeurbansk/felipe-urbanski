import CategoryRepository from "@categories/database/mongo/repositories/CategoryRepository";
import {
  ICategory,
  ICategoryId,
} from "@categories/interfaces/CategoryInterface";
import { ICategoryRepository } from "@categories/database/mongo/repositories/ICategoryRepository";
import { Document } from "mongoose";

export default class GetCategoryByIdService {
  public categoryRepository: ICategoryRepository;

  constructor({
    categoryRepository,
  }: {
    categoryRepository: CategoryRepository;
  }) {
    this.categoryRepository = categoryRepository;
  }

  async execute({ _id }: ICategoryId): Promise<ICategory | null> {
    return this.categoryRepository.getById({ _id });
  }
}
