import { IFilterOwner, IOwner } from "@owners/interfaces/OwnerInterface";
import GetOwnersService from "@owners/services/GetOwnersService";

export default class GetOwnersUseCase {
  private getOwnersService: GetOwnersService;

  constructor({ getOwnersService }: { getOwnersService: GetOwnersService }) {
    this.getOwnersService = getOwnersService;
  }

  public async handle(data: IFilterOwner): Promise<IOwner[] | null> {
    return this.getOwnersService.execute(data);
  }
}
