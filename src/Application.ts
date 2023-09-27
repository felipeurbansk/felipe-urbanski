import { AwilixContainer } from "awilix";
import container from "./Container";

export default class Application {
  private container: AwilixContainer;

  constructor() {
    this.container = container;
  }

  async start() {
    const { mongooseProvider, server, subscriptionService } =
      this.container.cradle;

    await mongooseProvider.connect();

    /** Initialize AMQP subscriptions */
    await subscriptionService.initialize();

    await server.setup();
  }
}
