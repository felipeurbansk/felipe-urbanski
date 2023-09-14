import container from "Container";
import { loadControllers, scopePerRequest } from "awilix-express";
import express, { Application } from "express";

export default class Server {
  private app: Application;
  private config: any;

  constructor({ config }: { config: any }) {
    this.app = express();
    this.config = config;
  }

  async setup() {
    this.app.use(express.json());
    this.app.use(express.json()).use(scopePerRequest(container));
    this.app.use(loadControllers("src/modules/**/controllers/*.ts"));

    return this.start();
  }

  async start() {
    this.app.listen(this.config.port, () => {
      console.log(`Listening on port ${this.config.port}`);
    });
  }
}
