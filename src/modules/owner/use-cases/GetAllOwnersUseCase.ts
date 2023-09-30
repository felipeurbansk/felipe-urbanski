import GetAllOwnersService from "modules/owner/services/GetAllOwnersService";
import { Document } from "mongoose";

export default class GetAllOwnersUseCase {
  private getAllOwnersService: GetAllOwnersService;

  constructor({
    getAllOwnersService,
  }: {
    getAllOwnersService: GetAllOwnersService;
  }) {
    this.getAllOwnersService = getAllOwnersService;
  }

  public async handle(): Promise<Document[] | null> {
    return this.getAllOwnersService.execute();
  }
}
