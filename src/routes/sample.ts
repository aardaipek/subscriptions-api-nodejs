import express from 'express';
import controller from '../controllers/sample';
import subscriptionController from '../controllers/subscription.controller';

const router = express.Router();

router.get('/healthcheck', controller.sampleHealthCheck);
router.post('/subscription', subscriptionController.addSubscription);

export = router;