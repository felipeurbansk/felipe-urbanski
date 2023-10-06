import OwnerRepository from "@owners/database/mongo/repositories/OwnerRepository";
import { IOwner, IOwnerId } from "@owners/interfaces/OwnerInterface";
import { IOwnerRepository } from "@owners/database/mongo/repositories/IOwnerRepository";

export default class GetOwnerByIdService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute({ _id }: IOwnerId): Promise<IOwner> {
    const persistedOwner = await this.ownerRepository.getById({ _id });

    if (!persistedOwner) {
      throw new Error(`Owner ${_id} does not exist`);
    }

    return persistedOwner;
  }
}
