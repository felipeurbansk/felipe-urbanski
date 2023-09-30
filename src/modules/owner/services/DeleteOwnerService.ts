import OwnerRepository from "modules/owner/database/mongo/repositories/OwnerRepository";
import { IOwnerId } from "modules/owner/interfaces/OwnerInterface";
import { IOwnerRepository } from "modules/owner/database/mongo/repositories/IOwnerRepository";

export default class DeleteOwnerService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute({ _id }: IOwnerId): Promise<void> {
    return this.ownerRepository.delete({ _id });
  }
}
