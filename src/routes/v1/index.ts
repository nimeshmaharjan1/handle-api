import { Router } from "express";
import projectRouter from "./projects";

export const v1Routes = Router();

v1Routes.use("/projects", projectRouter);
