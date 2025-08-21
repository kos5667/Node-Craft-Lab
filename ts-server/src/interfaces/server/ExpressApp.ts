import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';


export function createExpressApp(): Express {
    const app = express();
    app.use(helmet());
    app.use(cors());
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get("/", (req: Request, res: Response) => { res.send("Hello World!"); })
    return app
}
