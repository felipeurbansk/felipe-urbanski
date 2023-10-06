import CatalogUpdatedPublisher from "@catalogs/amqp/pub/CatalogUpdatedPublisher";
import { IProduct } from "@products/interfaces/ProductInterface";
import RabbitMQProvider from "infrastructure/amqp/rabbitmq/RabbitMQProvider";

export default class ProductCreatedPublisher {
  private connection: RabbitMQProvider;
  private catalogUpdatedPublisher: CatalogUpdatedPublisher;
  private exchangeName: string = "product.events";
  private routingKey: string = "product.created";

  constructor({
    rabbitMQProvider,
    catalogUpdatedPublisher,
  }: {
    rabbitMQProvider: RabbitMQProvider;
    catalogUpdatedPublisher: CatalogUpdatedPublisher;
  }) {
    this.connection = rabbitMQProvider;
    this.catalogUpdatedPublisher = catalogUpdatedPublisher;
  }

  async publish(product: IProduct) {
    try {
      const connection = await this.connection.connect();

      if (!connection) {
        throw new Error(`Cannot connect to RabbitMQ`);
      }

      const channel = await connection.createChannel();

      await channel.assertExchange(this.exchangeName, "fanout", {
        durable: false,
      });

      channel.publish(
        this.exchangeName,
        this.routingKey,
        Buffer.from(JSON.stringify(product))
      );

      await this.catalogUpdatedPublisher.publish(product);

      console.log(
        `Publish message from ${this.exchangeName} with routing key ${this.routingKey}`
      );
    } catch (err: any) {
      console.error("Error when publish message:", err.message);
    }
  }
}
