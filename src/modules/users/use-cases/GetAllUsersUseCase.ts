import GetAllUsersService from "@users/services/GetAllUsersService";
import { Document } from "mongoose";

export default class GetAllUsersUseCase {
  private getAllUsersService: GetAllUsersService;

  constructor({
    getAllUsersService,
  }: {
    getAllUsersService: GetAllUsersService;
  }) {
    this.getAllUsersService = getAllUsersService;
  }

  public async handle(): Promise<Document[] | null> {
    return this.getAllUsersService.execute();
  }
}
