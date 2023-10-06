import { IOwnerId } from "@owners/interfaces/OwnerInterface";
import S3Provider from "infrastructure/aws/s3/S3Provider";
import GetCatalogByOwnerIdUseCase from "./GetCatalogByOwnerIdUseCase";
import { IConfig } from "config/env";
import { PutObjectCommandOutput } from "@aws-sdk/client-s3";

export default class UploadCatalogS3ByOwnerIdUseCase {
  private s3Provider: S3Provider;
  private getCatalogByOwnerIdUseCase: GetCatalogByOwnerIdUseCase;
  private config: IConfig;

  constructor({
    s3Provider,
    // getCatalogByOwnerIdUseCase,
    config,
  }: {
    s3Provider: S3Provider;
    getCatalogByOwnerIdUseCase: GetCatalogByOwnerIdUseCase;
    config: IConfig;
  }) {
    this.s3Provider = s3Provider;
    // this.getCatalogByOwnerIdUseCase = getCatalogByOwnerIdUseCase;
    this.config = config;
  }

  public async handle({
    _id,
  }: IOwnerId): Promise<PutObjectCommandOutput | void> {
    // const ownerCatalog = await this.getCatalogByOwnerIdUseCase.handle({
    //   _id,
    // });
    // const uploadFile = await this.s3Provider.uploadFile(
    //   this.config.aws.s3.bucket,
    //   `catalog_${ownerCatalog.owner._id}.json`,
    //   ownerCatalog
    // );
    // return uploadFile;
  }
}
