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

const container = createContainer();

container.register({
  config: asValue(env),
  server: asClass(Server).singleton(),

  // Register Repositories
  userRepository: asClass(UserRepository).singleton(),
  productRepository: asClass(ProductRepository).singleton(),
  categoryRepository: asClass(CategoryRepository).singleton(),

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
