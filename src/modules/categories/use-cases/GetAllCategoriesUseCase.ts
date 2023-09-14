import GetAllCategoriesService from "@categories/services/GetAllCategoriesService";
import { Document } from "mongoose";

export default class GetAllCategoriesUseCase {
  private getAllCategoriesService: GetAllCategoriesService;

  constructor({
    getAllCategoriesService,
  }: {
    getAllCategoriesService: GetAllCategoriesService;
  }) {
    this.getAllCategoriesService = getAllCategoriesService;
  }

  public async handle(): Promise<Document[] | null> {
    return this.getAllCategoriesService.execute();
  }
}
