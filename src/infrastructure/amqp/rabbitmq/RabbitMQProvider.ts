import amqp, { Connection } from "amqplib";
import { IConfig } from "config/env";

export default class RabbitMQProvider {
  private connection!: Connection;
  private config: IConfig;

  constructor({ config }: { config: IConfig }) {
    console.log("Entrou aqui no RabbitMQProvider");
    this.config = config;
  }

  async connect() {
    if (!this.connection) {
      try {
        this.connection = await amqp.connect({
          hostname: this.config.integration.amqp.rabbitMQ.host,
          username: this.config.integration.amqp.rabbitMQ.username,
          password: this.config.integration.amqp.rabbitMQ.password,
          port: this.config.integration.amqp.rabbitMQ.port,
        });
      } catch (err: any) {
        console.error("RabbitMQ connect error:", err.message);
        throw err;
      }
    }

    return this.connection;
  }

  async createChannel() {
    if (!this.connection) {
      throw new Error("Connection not established, call connect() first");
    }

    try {
      const channel = await this.connection.createChannel();

      return channel;
    } catch (err: any) {
      console.error("Error when channel creation", err.message);
      throw err;
    }
  }
}
