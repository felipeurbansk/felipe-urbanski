import { IFilterOwner, IOwner } from "modules/owner/interfaces/OwnerInterface";
import GetOwnersService from "modules/owner/services/GetOwnersService";

export default class GetOwnersUseCase {
  private getOwnersService: GetOwnersService;

  constructor({ getOwnersService }: { getOwnersService: GetOwnersService }) {
    this.getOwnersService = getOwnersService;
  }

  public async handle(data: IFilterOwner): Promise<IOwner[] | null> {
    return this.getOwnersService.execute(data);
  }
}
