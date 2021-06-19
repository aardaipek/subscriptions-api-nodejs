"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const sample_1 = __importDefault(require("../controllers/sample"));
const subscription_controller_1 = __importDefault(require("../controllers/subscription.controller"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const router = express_1.default.Router();
router.get('/healthcheck', sample_1.default.sampleHealthCheck);
router.post('/subscription/create', subscription_controller_1.default.addSubscription);
router.post('/user/create', user_controller_1.default.addUser);
module.exports = router;
//# sourceMappingURL=sample.js.map