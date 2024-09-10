"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projects_1 = require("../../controllers/projects");
const projectRouter = (0, express_1.Router)();
projectRouter.route("/").get(projects_1.getProjects).post(projects_1.createProject);
exports.default = projectRouter;
