import OwnerRepository from "@owners/database/mongo/repositories/OwnerRepository";
import { ICreateOwner, IOwner } from "@owners/interfaces/OwnerInterface";
import { IOwnerRepository } from "@owners/database/mongo/repositories/IOwnerRepository";

export default class CreateOwnerService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute(data: ICreateOwner): Promise<IOwner> {
    return this.ownerRepository.create(data);
  }
}
