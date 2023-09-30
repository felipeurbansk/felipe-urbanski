import OwnerRepository from "modules/owner/database/mongo/repositories/OwnerRepository";
import { IFilterOwner, IOwner } from "modules/owner/interfaces/OwnerInterface";
import { IOwnerRepository } from "modules/owner/database/mongo/repositories/IOwnerRepository";

export default class GetOwnersService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute(data: IFilterOwner): Promise<IOwner[] | null> {
    return this.ownerRepository.filter(data);
  }
}
