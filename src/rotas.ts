import express from "express";
import { UserController } from "./controllers/UserController";
import {
  validateBody,
  validateParams,
} from "./middlewares/schemaValidationMiddleware";
import { createBodySchema } from "./yup/schemas/createBodySchema";
import { uuidSchema } from "./yup/schemas/uuidSchema";

export const rotas = express();

rotas.post(
  "/formulario",
  validateBody(createBodySchema),
  new UserController().create
);
rotas.get("/formulario/", new UserController().list);
rotas.put(
  "/formulario/:id",
  validateParams(uuidSchema),
  validateBody(createBodySchema),
  new UserController().update
);
rotas.delete(
  "/formulario/:id",
  validateParams(uuidSchema),
  new UserController().delete
);
