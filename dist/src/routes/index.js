"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = require("express");
const v1_1 = require("./v1");
exports.v1Router = (0, express_1.Router)();
exports.v1Router.use("/v1", v1_1.v1Routes);
