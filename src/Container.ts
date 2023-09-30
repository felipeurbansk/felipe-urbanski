import Server from "Server";
import env from "./config/env";
import ProductRepository from "@products/database/mongo/repositories/ProductRepository";
import ProductSchema from "@products/database/mongo/schemas/ProductSchema";
import UserRepository from "@users/database/mongo/repositories/UserRepository";
import UserSchema from "@users/database/mongo/schemas/UserSchema";
import CategorySchema from "@categories/database/mongo/schemas/CategorySchema";
import {
  InjectionMode,
  createContainer,
  asClass,
  Lifetime,
  asValue,
} from "awilix";
import CategoryRepository from "@categories/database/mongo/repositories/CategoryRepository";
import RabbitMQProvider from "infrastructure/amqp/rabbitmq/RabbitMQProvider";
import SubscriptionService from "utils/SubscriptionService";
import S3Provider from "infrastructure/aws/s3/S3Provider";

const container = createContainer();

container.register({
  config: asValue(env),
  server: asClass(Server).singleton(),

  // Infrastructure
  rabbitMQProvider: asClass(RabbitMQProvider).singleton(),

  s3Provider: asClass(S3Provider).singleton(),

  // Register Repositories
  userRepository: asClass(UserRepository).singleton(),
  productRepository: asClass(ProductRepository).singleton(),
  categoryRepository: asClass(CategoryRepository).singleton(),

  // Utils
  subscriptionService: asClass(SubscriptionService),

  // Schemas
  userSchema: asValue(UserSchema),
  productSchema: asValue(ProductSchema),
  categorySchema: asValue(CategorySchema),
});

container.loadModules(
  [
    "src/modules/users/**/*.ts",
    "src/modules/products/**/*.ts",
    "src/modules/categories/**/*.ts",
    [
      "src/modules/*/database/mongo/models/*.ts",
      {
        register: asClass,
        lifetime: Lifetime.SINGLETON,
      },
    ],
    [
      "src/infrastructure/database/mongoose/MongooseProvider.ts",
      {
        register: asClass,
        lifetime: Lifetime.SINGLETON,
      },
    ],
  ],
  {
    esModules: false,
    formatName: "camelCase",
    resolverOptions: {
      injectionMode: InjectionMode.PROXY,
    },
  }
);

export default container;
