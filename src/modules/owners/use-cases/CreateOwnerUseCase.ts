import { ICreateOwner, IOwner } from "@owners/interfaces/OwnerInterface";
import CreateOwnerService from "@owners/services/CreateOwnerService";

export default class CreateOwnerUseCase {
  private createOwnerService: CreateOwnerService;

  constructor({
    createOwnerService,
  }: {
    createOwnerService: CreateOwnerService;
  }) {
    this.createOwnerService = createOwnerService;
  }

  public async handle(data: ICreateOwner): Promise<IOwner> {
    return this.createOwnerService.execute(data);
  }
}
