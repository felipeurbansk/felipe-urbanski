import OwnerRepository from "@owners/database/mongo/repositories/OwnerRepository";
import { IOwnerRepository } from "@owners/database/mongo/repositories/IOwnerRepository";
import { IOwner } from "@owners/interfaces/OwnerInterface";

export default class GetAllOwnersService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute(): Promise<IOwner[] | null> {
    return this.ownerRepository.getAll();
  }
}
