import "reflect-metadata";
require("dotenv").config();

import Application from "./src/Application";

const app = new Application();

app
  .start()
  .then(() => {
    console.log("Server started");
  })
  .catch((err: Error) => {
    console.error(err.stack);
    process.exit(1);
  });
