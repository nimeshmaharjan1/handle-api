"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Routes = void 0;
const express_1 = require("express");
const projects_1 = __importDefault(require("./projects"));
exports.v1Routes = (0, express_1.Router)();
exports.v1Routes.use("/projects", projects_1.default);
