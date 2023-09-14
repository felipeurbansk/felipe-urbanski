export interface IConfig {
  environment: string;
  port: number;
  db: {
    username: string;
    password: string;
    database: string;
    server: string;
    dialect: string;
    logging: string;
    options: {
      authMechanism: string;
    };
  };
  integration: {
    rest: {};
    amqp: {};
  };
}

export default {
  environment: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  db: {
    username: process.env.MONGODB_USERNAME,
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
  integration: {
    rest: {},
    amqp: {},
  },
};
