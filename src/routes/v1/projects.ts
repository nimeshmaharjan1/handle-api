import { Router } from "express";
import { createProject, getProjects } from "../../controllers/projects";

const projectRouter = Router();

projectRouter.route("/").get(getProjects).post(createProject);

export default projectRouter;
