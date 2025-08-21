import { Router, Request, Response, NextFunction } from 'express';

export function createHttpRouter(): Router {
    const router = Router();

    router.get('/api/v1/health_check', (req: Request, res: Response) => { res.send('OK') })

    return router;
}
