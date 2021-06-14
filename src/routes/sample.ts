import express from 'express';
import controller from '../controllers/sample';

const router = express.Router();

router.get('/healthcheck', controller.sampleHealthCheck);

export = router;