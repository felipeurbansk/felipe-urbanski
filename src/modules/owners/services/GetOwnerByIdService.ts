import OwnerRepository from "@owners/database/mongo/repositories/OwnerRepository";
import { IOwner, IOwnerId } from "@owners/interfaces/OwnerInterface";
import { IOwnerRepository } from "@owners/database/mongo/repositories/IOwnerRepository";
import { Document } from "mongoose";

export default class GetOwnerByIdService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute({ _id }: IOwnerId): Promise<IOwner | null> {
    return this.ownerRepository.getById({ _id });
  }
}
