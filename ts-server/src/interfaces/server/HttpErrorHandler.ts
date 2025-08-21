import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import winston from "winston";

export class NotFoundError extends Error {
    constructor(message = 'apis not found') {
        super(message);
        this.name = 'NotFoundError';
    }
}

export class BadRequestError extends Error {
    constructor(message = 'Bad request') {
        super(message);
        this.name = 'BadRequestError';
    }
}

export class ValidationError extends Error {
    constructor(message = 'ValidationError') {
        super(message);
        this.name = 'ValidationError';
    }
}

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    next(new NotFoundError(`Route ${req.method} "${req.originalUrl}" not found`));
}

export const httpErrorHandler: ErrorRequestHandler = async (err: any, req: Request, res: Response, next: NextFunction) =>  {
    winston.error(`====> ${req.method} ${req.originalUrl}, error: ${err.name}`);

    if (err.name === 'NotFoundError') {
        return res.status(404).json({ code: 'NOT_FOUND', message: err.message });
    }

    // 커스텀 에러 핸들링
    if (err.name === 'ValidationError') {
        return res.status(400).json({ code: 'VALIDATION_ERROR', message: err.message });
    }

    return res.status(500).json({ code: 'INTERNAL_ERROR', message: err.message });
}
