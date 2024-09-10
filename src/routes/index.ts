import { Router } from "express";
import { v1Routes } from "./v1";

export const v1Router = Router();

v1Router.use("/v1", v1Routes);
