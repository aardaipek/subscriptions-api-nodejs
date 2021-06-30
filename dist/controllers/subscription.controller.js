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
const firebase_config_1 = __importDefault(require("../config/firebase.config"));
const log_1 = __importDefault(require("../config/log"));
const firestore = firebase_config_1.default.firestore();
// Collections
const subscriptionCollection = "subscriptions";
const addSubscription = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const subType = req.body.type;
        const data = req.body.data;
        const subref = firestore
            .collection(subscriptionCollection)
            .doc(username)
            .collection(subscriptionCollection)
            .doc(subType);
        yield subref.set(data);
        res.send(log_1.default.info("Development", "Your subscription record has created"));
    }
    catch (err) {
        log_1.default.error("Development", err.message);
        res.status(400).send("Something wrong!");
    }
});
const getAllUserSubscription = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.username) {
            const username = req.body.username;
            var subscriptionArray = [];
            //TODO: token işlemleri ve giriş yapan user ile istek atan user ın aynı olduğunun bulunması gerek
            yield firestore
                .collection(subscriptionCollection)
                .doc(username)
                .collection(subscriptionCollection)
                .get()
                .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    subscriptionArray.push(doc.data());
                });
            });
            res.json(subscriptionArray);
        }
        else {
            res
                .status(400)
                .send("Username and sub type is required please fill these values");
        }
    }
    catch (err) { }
});
exports.default = { addSubscription, getAllUserSubscription };
//# sourceMappingURL=subscription.controller.js.map