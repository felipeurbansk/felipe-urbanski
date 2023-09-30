import OwnerRepository from "@owners/database/mongo/repositories/OwnerRepository";
import { IFilterOwner, IOwner } from "@owners/interfaces/OwnerInterface";
import { IOwnerRepository } from "@owners/database/mongo/repositories/IOwnerRepository";

export default class GetOwnersService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute(data: IFilterOwner): Promise<IOwner[] | null> {
    return this.ownerRepository.filter(data);
  }
}
