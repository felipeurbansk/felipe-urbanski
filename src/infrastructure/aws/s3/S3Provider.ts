import {
  S3,
  PutObjectCommandOutput,
  GetObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { IConfig } from "config/env";

export default class S3Provider {
  private s3: S3;
  private config: IConfig;

  constructor({ config }: { config: IConfig }) {
    this.config = config;

    this.s3 = new S3({
      endpoint: `http://${this.config.aws.s3.host}:${this.config.aws.s3.port}`,
      credentials: {
        accessKeyId: this.config.aws.accessKeyId,
        secretAccessKey: this.config.aws.secretAccessKey,
      },
      forcePathStyle: true,
      region: this.config.aws.defaultRegion,
    });
  }

  async uploadFile(
    bucketName: string,
    fileName: string,
    content: any
  ): Promise<PutObjectCommandOutput> {
    if (!this.s3) {
      throw new Error("Connection S3 not established");
    }

    const response = await this.s3.putObject({
      Bucket: bucketName,
      Key: fileName,
      Body: JSON.stringify(content),
      ContentType: "application/json",
    });

    return response;
  }

  async getFile(
    bucketName: string,
    fileName: string
  ): Promise<GetObjectCommandOutput> {
    if (!this.s3) {
      throw new Error("Connection S3 not established");
    }

    const response = await this.s3.getObject({
      Bucket: bucketName,
      Key: fileName,
    });

    if (!response.Body) {
      throw new Error(`Body could not be found: ${fileName}`);
    }

    return await JSON.parse(await response.Body.transformToString());
  }

  async checkFileExists(bucketName: string, fileName: string) {
    return await this.s3
      .headObject({
        Bucket: bucketName,
        Key: fileName,
      })
      .then(() => true)
      .catch((err) => {
        if (err.$metadata.httpStatusCode === 404) {
          return false;
        }

        throw err;
      });
  }
}
