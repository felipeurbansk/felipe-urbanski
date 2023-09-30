import {
  ICreateOwner,
  IFilterOwner,
  IOwner,
  IOwnerId,
} from "modules/owner/interfaces/OwnerInterface";

export interface IOwnerRepository {
  create(data: ICreateOwner): Promise<IOwner>;
  delete({ _id }: IOwnerId): Promise<void>;
  filter(data: IFilterOwner): Promise<IOwner[] | null>;
  getAll(): Promise<IOwner[] | null>;
  getByEmail({ email }: IOwner): Promise<IOwner | null>;
  getById({ _id }: IOwnerId): Promise<IOwner | null>;
  update(data: IOwner): Promise<void>;
}
