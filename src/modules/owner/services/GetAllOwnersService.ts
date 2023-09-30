import OwnerRepository from "modules/owner/database/mongo/repositories/OwnerRepository";
import { IOwnerRepository } from "modules/owner/database/mongo/repositories/IOwnerRepository";
import { IOwner } from "modules/owner/interfaces/OwnerInterface";

export default class GetAllOwnersService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute(): Promise<IOwner[] | null> {
    return this.ownerRepository.getAll();
  }
}
