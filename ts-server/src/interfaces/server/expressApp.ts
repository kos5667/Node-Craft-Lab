import express, {Express, Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import winston from "winston";


export function createExpressApp(): Express {
    const app = express();
    app.use(helmet());
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(errorHandler)
    app.use((req: Request, res: Response, next: NextFunction) => {
        next();
    });
    return app
}

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    winston.error(`${req.method} ${req.originalUrl}, error: ${err}`);

    res.status(500).json({
        message: 'Internal Server Error',
        code: '500',
        error: err
    });
};
