import OwnerRepository from "modules/owner/database/mongo/repositories/OwnerRepository";
import { ICreateOwner, IOwner } from "modules/owner/interfaces/OwnerInterface";
import { IOwnerRepository } from "modules/owner/database/mongo/repositories/IOwnerRepository";

export default class CreateOwnerService {
  public ownerRepository: IOwnerRepository;

  constructor({ ownerRepository }: { ownerRepository: OwnerRepository }) {
    this.ownerRepository = ownerRepository;
  }

  async execute(data: ICreateOwner): Promise<IOwner> {
    return this.ownerRepository.create(data);
  }
}
