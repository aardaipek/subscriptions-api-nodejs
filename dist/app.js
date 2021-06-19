"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const config_1 = __importDefault(require("./config/config"));
const log_1 = __importDefault(require("./config/log"));
const sample_1 = __importDefault(require("./routes/sample"));
const NAMESPACE = 'Server';
const app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use('/api', sample_1.default);
const httpServer = http_1.default.createServer(app);
httpServer.listen(config_1.default.server.port, () => log_1.default.info(NAMESPACE, `Server running on ${config_1.default.server.hostname}:${config_1.default.server.port}`));
//# sourceMappingURL=app.js.map