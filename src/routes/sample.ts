import express from 'express';
import controller from '../controllers/sample';
import userController from '../controllers/user.controller';

const router = express.Router();

router.get('/healthcheck', controller.sampleHealthCheck);
router.get('/user/:id', userController.getUser);

export = router;