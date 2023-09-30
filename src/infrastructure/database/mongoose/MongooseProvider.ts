import { IConfig } from "config/env";
import { Connection, Mongoose } from "mongoose";

export default class MongooseProvider {
  public connection!: Connection;
  private url!: string;
  private mongoose: Mongoose;
  private config: IConfig;

  constructor({ config }: { config: IConfig }) {
    this.mongoose = new Mongoose();
    this.config = config;
  }

  getMongoUrl(configDB: {
    ownername: string;
    password: string;
    server: string;
    dialect: string;
    database: string;
  }) {
    const { ownername, password, server, dialect, database } = configDB;

    return `${dialect}://${ownername}:${password}@${server}/?tls=false&authMechanism=DEFAULT`;
  }

  setEventListeners() {
    this.connection.on("connected", () =>
      console.log("Mongodb connection stablished")
    );

    this.connection.on("disconnected", () =>
      console.log("Mongodb connection lost")
    );

    this.connection.on("reconnected", () =>
      console.log("Mongodb successfully reconnected")
    );

    this.connection.on("reconnectFailed", () => {
      console.log("Mongodb reconnection fail, killing the process");
      process.exit(1);
    });
  }

  async connect() {
    this.url = this.getMongoUrl({
      ownername: this.config.db.ownername,
      password: this.config.db.password,
      server: this.config.db.server,
      database: this.config.db.database,
      dialect: this.config.db.dialect,
    });

    try {
      this.connection = this.mongoose.createConnection(this.url, {
        dbName: this.config.db.database,
      });

      return this.connection;
    } catch (err) {
      console.log(err);
    }
  }
}
