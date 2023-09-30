import { IOwnerId } from "@owners/interfaces/OwnerInterface";
import DeleteOwnerService from "@owners/services/DeleteOwnerService";

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
