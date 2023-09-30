import {
  S3,
  PutObjectCommand,
  PutObjectCommandOutput,
} from "@aws-sdk/client-s3";
import { IUser } from "@users/interfaces/UserInterface";
import { IConfig } from "config/env";

export default class S3Provider {
  private s3: S3;
  private config: IConfig;

  constructor({ config }: { config: IConfig }) {
    this.config = config;

    console.log({ s3: this.config.aws });
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
    content: IUser
  ): Promise<PutObjectCommandOutput | null> {
    if (!this.s3) {
      throw new Error("Connection S3 not established");
    }

    try {
      const response = await this.s3.putObject({
        Bucket: bucketName,
        Key: fileName,
        Body: JSON.stringify(content),
        ContentType: "application/json",
      });

      return response;
    } catch (err: any) {
      console.log(err);
      throw new Error(`Failed to upload file ${fileName}`);
    }
  }
}
