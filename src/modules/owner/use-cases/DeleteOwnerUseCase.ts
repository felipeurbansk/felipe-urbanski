import { IOwnerId } from "modules/owner/interfaces/OwnerInterface";
import DeleteOwnerService from "modules/owner/services/DeleteOwnerService";

export default class DeleteOwnerUseCase {
  private deleteOwnerService: DeleteOwnerService;

  constructor({
    deleteOwnerService,
  }: {
    deleteOwnerService: DeleteOwnerService;
  }) {
    this.deleteOwnerService = deleteOwnerService;
  }

  public async handle({ _id }: IOwnerId): Promise<void> {
    return this.deleteOwnerService.execute({ _id });
  }
}
