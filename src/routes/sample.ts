import express from "express";
import controller from "../controllers/sample";
import subscriptionController from "../controllers/subscription.controller";
import userController from "../controllers/user.controller";

const router = express.Router();

router.get("/healthcheck", controller.sampleHealthCheck);
router.post("/subscription/create", subscriptionController.addSubscription);
router.get(
  "/subscription/get_all",
  subscriptionController.getAllUserSubscription
);
router.post("/user/create", userController.addUser);

export = router;
