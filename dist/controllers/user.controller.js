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
const user_service_1 = require("../services/user.service");
const log_1 = __importDefault(require("../config/log"));
const NAMESPACE = "User Controller";
const getUser = (req, res, next) => {
    log_1.default.info(NAMESPACE, `User get route called`);
    return res.status(200).json({
        id: req.params.id
    });
};
const userCreate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.createUser(req.body);
        return res.send(user);
    }
    catch (err) {
        log_1.default.warn(NAMESPACE, err);
        return res.status(409).send(err.message);
    }
});
exports.default = { getUser, userCreate };
//# sourceMappingURL=user.controller.js.map