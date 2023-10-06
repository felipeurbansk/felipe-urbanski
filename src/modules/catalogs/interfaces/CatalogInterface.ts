import { IOwnerCatalog } from "@owners/interfaces/OwnerInterface";
import { IProduct } from "@products/interfaces/ProductInterface";

export interface ICatalog {
  owner: IOwnerCatalog;
  catalog: [IProduct] | undefined;
}
