import UploadCatalogS3ByOwnerIdUseCase from "@catalogs/use-cases/UploadCatalogS3ByOwnerIdUseCase";
import { IProduct } from "@products/interfaces/ProductInterface";
import RabbitMQProvider from "infrastructure/amqp/rabbitmq/RabbitMQProvider";

export default class CatalogProductCreatedSubscriber {
  private connection: RabbitMQProvider;
  private uploadCatalogS3ByOwnerIdUseCase!: UploadCatalogS3ByOwnerIdUseCase;

  private exchangeName: string = "catalog.events";
  private routingKey: string = "catalog.update";

  constructor({
    rabbitMQProvider,
    uploadCatalogS3ByOwnerIdUseCase,
  }: {
    rabbitMQProvider: RabbitMQProvider;
    uploadCatalogS3ByOwnerIdUseCase: UploadCatalogS3ByOwnerIdUseCase;
  }) {
    this.connection = rabbitMQProvider;
    this.uploadCatalogS3ByOwnerIdUseCase = uploadCatalogS3ByOwnerIdUseCase;
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

  async handleMessage(product: IProduct) {
    this.uploadCatalogS3ByOwnerIdUseCase.handle({
      _id: product.owner._id,
    });
  }
}
