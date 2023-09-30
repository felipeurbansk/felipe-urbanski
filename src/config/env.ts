export interface IConfig {
  environment: string;
  port: number;
  db: {
    ownername: string;
    password: string;
    database: string;
    server: string;
    dialect: string;
    logging: string;
    options: {
      authMechanism: string;
    };
  };
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    defaultRegion: string;
    defaultOutput: string;
    s3: {
      bucket: string;
      host: string;
      port: number;
    };
  };
  integration: {
    rest: {};
    amqp: {
      rabbitMQ: {
        ownername: string;
        password: string;
        host: string;
        port: number;
      };
    };
  };
}

export default {
  environment: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  db: {
    ownername: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    database: process.env.MONGODB_DATABASE,
    server: process.env.MONGODB_SERVER,
    dialect: process.env.MONGODB_DIALECT,
    logging: process.env.MONGODB_LOGGING,
    options: {
      authMechanism: "DEFAULT",
      replicaSet: "",
      useUnifiedTopology: true,
      readPreference: "nearest",
      useNewUrlParser: true,
    },
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    defaultRegion: process.env.AWS_DEFAULT_REGION,
    defaultOutput: process.env.AWS_DEFAULT_OUTPUT,
    s3: {
      bucket: process.env.AWS_S3_BUCKET_NAME,
      host: process.env.AWS_S3_HOST,
      port: process.env.AWS_S3_PORT,
    },
  },
  integration: {
    rest: {},
    amqp: {
      rabbitMQ: {
        host: process.env.RABBITMQ_HOST,
        ownername: process.env.RABBITMQ_USERNAME,
        password: process.env.RABBITMQ_PASSWORD,
        port: process.env.RABBITMQ_PORT,
      },
    },
  },
};
