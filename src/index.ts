import "express-async-errors";
import express from "express";
import { AppDataSource } from "./data-source";
import { rotas } from "./rotas";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());
  app.use(rotas);

  app.use(globalErrorHandler);
  app.listen(process.env.PORT || 3000);
});
