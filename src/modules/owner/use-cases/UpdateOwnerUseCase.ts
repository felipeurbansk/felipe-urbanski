import { IOwner } from "modules/owner/interfaces/OwnerInterface";
import UpdateOwnerService from "modules/owner/services/UpdateOwnerService";

export default class UpdateOwnerUseCase {
  private updateOwnerService: UpdateOwnerService;

  constructor({
    updateOwnerService,
  }: {
    updateOwnerService: UpdateOwnerService;
  }) {
    this.updateOwnerService = updateOwnerService;
  }

  public async handle(data: IOwner): Promise<void> {
    return this.updateOwnerService.execute(data);
  }
}
