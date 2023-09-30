import { IOwner, IOwnerId } from "modules/owner/interfaces/OwnerInterface";
import GetOwnerByIdService from "modules/owner/services/GetOwnerByIdService";

export default class GetOwnerByIdUseCase {
  private getOwnerByIdService: GetOwnerByIdService;

  constructor({
    getOwnerByIdService,
  }: {
    getOwnerByIdService: GetOwnerByIdService;
  }) {
    this.getOwnerByIdService = getOwnerByIdService;
  }

  public async handle({ _id }: IOwnerId): Promise<IOwner | null> {
    return this.getOwnerByIdService.execute({ _id });
  }
}
