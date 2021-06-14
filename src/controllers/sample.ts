import { Request, Response, NextFunction } from 'express';
import logs from '../config/log';

const NAMESPACE = "Sample Controller";

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logs.info(NAMESPACE, `Sample health check route called`);

    return res.status(200).json({
        message: 'Running'
    })
};


export default { sampleHealthCheck };
