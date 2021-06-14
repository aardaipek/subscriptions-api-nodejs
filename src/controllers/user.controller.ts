import { Request, Response, NextFunction } from 'express';
import { createUser } from '../services/user.service';
import logs from '../config/log';

const NAMESPACE = "User Controller";

const getUser = (req: Request, res: Response, next: NextFunction) => {
    logs.info(NAMESPACE, `User get route called`);

    return res.status(200).json({
        id: req.params.id
    })
};

const userCreate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await createUser(req.body);
        return res.send(user);
    } catch (err) {
        logs.warn(NAMESPACE, err);
        return res.status(409).send(err.message);
    }
};


export default { getUser, userCreate };
