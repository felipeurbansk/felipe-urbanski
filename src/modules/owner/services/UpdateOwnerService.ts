import OwnerRepository from "modules/owner/database/mongo/repositories/OwnerRepository";
import { IOwner } from "modules/owner/interfaces/OwnerInterface";
import { IOwnerRepository } from "modules/owner/database/mongo/repositories/IOwnerRepository";

export default class UpdateOwnerService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute(data: IOwner): Promise<void> {
    return this.ownerRepository.update(data);
  }
}
