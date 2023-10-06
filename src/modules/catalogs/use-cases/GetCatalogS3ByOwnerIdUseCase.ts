import { GetObjectCommandOutput } from "@aws-sdk/client-s3";
import { IOwnerId } from "@owners/interfaces/OwnerInterface";
import { IConfig } from "config/env";
import S3Provider from "infrastructure/aws/s3/S3Provider";
import UploadCatalogS3ByOwnerIdUseCase from "./UploadCatalogS3ByOwnerIdUseCase";
import { ICatalog } from "@catalogs/interfaces/CatalogInterface";

export default class GetCatalogS3ByOwnerIdUseCase {
  private s3Provider: S3Provider;
  private config: IConfig;
  private uploadCatalogS3ByOwnerIdUseCase: UploadCatalogS3ByOwnerIdUseCase;

  constructor({
    s3Provider,
    config,
    uploadCatalogS3ByOwnerIdUseCase,
  }: {
    s3Provider: S3Provider;
    config: IConfig;
    uploadCatalogS3ByOwnerIdUseCase: UploadCatalogS3ByOwnerIdUseCase;
  }) {
    this.s3Provider = s3Provider;
    this.config = config;
    this.uploadCatalogS3ByOwnerIdUseCase = uploadCatalogS3ByOwnerIdUseCase;
  }

  public async handle({ _id }: IOwnerId): Promise<any> {
    const catalogExists = await this.s3Provider.checkFileExists(
      this.config.aws.s3.bucket,
      `catalog_${_id}.json`
    );

    if (catalogExists) {
      return await this.s3Provider.getFile(
        this.config.aws.s3.bucket,
        `catalog_${_id}.json`
      );
    }

    return this.uploadCatalogS3ByOwnerIdUseCase.handle({ _id });
  }
}
