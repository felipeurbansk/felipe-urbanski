import { IProduct } from "@products/interfaces/ProductInterface";
import RabbitMQProvider from "infrastructure/amqp/rabbitmq/RabbitMQProvider";

export default class ProductCreatedSubscriber {
  private connection: RabbitMQProvider;
  private exchangeName: string = "product.events";
  private routingKey: string = "product.created";

  constructor({ rabbitMQProvider }: { rabbitMQProvider: RabbitMQProvider }) {
    this.connection = rabbitMQProvider;
  }

  async subscribe() {
    try {
      const connection = await this.connection.connect();

      if (!connection) {
        throw new Error(`Cannot connect to RabbitMQ`);
      }

      const channel = await connection.createChannel();

      await channel.assertExchange(this.exchangeName, "fanout", {
        durable: false,
      });
      const assertQueue = await channel.assertQueue("", { exclusive: true });

      await channel.bindQueue(
        assertQueue.queue,
        this.exchangeName,
        this.routingKey
      );

      console.log(
        `Aguardando mensagens no exchange ${this.exchangeName} com routing key ${this.routingKey}`
      );

      channel.consume(assertQueue.queue, (message) => {
        if (message) {
          const product: IProduct = JSON.parse(message.content.toString());

          this.handleMessage(product);
          channel.ack(message);
        }
      });
    } catch (err: any) {
      console.error("Error when publish message:", err.message);
    }
  }

  private handleMessage(product: IProduct) {
    console.log("Mensagem recebida:", product);
  }
}
