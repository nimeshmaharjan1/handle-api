"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProject = exports.getProjects = void 0;
const db_1 = __importDefault(require("../lib/db"));
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield db_1.default.project.findMany();
        return res.status(200).json({
            data: projects,
            success: true,
            message: "Projects fetched successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Error while retrieving projects",
        });
    }
});
exports.getProjects = getProjects;
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, startDate, endDate } = req.body;
        const project = yield db_1.default.project.create({
            data: {
                name,
                description,
                startDate,
                endDate,
            },
        });
        return res.status(201).json({
            message: "Project created successfully",
            data: project,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Error while creating project",
            error,
        });
    }
});
exports.createProject = createProject;
