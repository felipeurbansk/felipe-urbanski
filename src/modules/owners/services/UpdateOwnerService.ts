import OwnerRepository from "@owners/database/mongo/repositories/OwnerRepository";
import { IOwner } from "@owners/interfaces/OwnerInterface";
import { IOwnerRepository } from "@owners/database/mongo/repositories/IOwnerRepository";

export default class UpdateOwnerService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute(data: IOwner): Promise<void> {
    return this.ownerRepository.update(data);
  }
}
