import { AwilixContainer } from "awilix";
import container from "./Container";

export default class Application {
  private container: AwilixContainer;

  constructor() {
    this.container = container;
  }

  async start() {
    const { mongooseProvider, server } = this.container.cradle;

    await mongooseProvider.connect();

    await server.setup();
  }
}
