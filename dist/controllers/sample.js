"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = __importDefault(require("../config/log"));
const NAMESPACE = "Sample Controller";
const sampleHealthCheck = (req, res, next) => {
    log_1.default.info(NAMESPACE, `Sample health check route called`);
    return res.status(200).json({
        message: 'Running'
    });
};
exports.default = { sampleHealthCheck };
//# sourceMappingURL=sample.js.map