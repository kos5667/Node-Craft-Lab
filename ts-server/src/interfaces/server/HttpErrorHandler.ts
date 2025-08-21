import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import winston from "winston";

export class NotFoundError extends Error {
    private readonly code: any;

    constructor(message = 'apis not found', code: any) {
        super(message);
        this.name = 'NotFoundError';
        this.code = code
    }
}

export class BadRequestError extends Error {
    constructor(message = 'Bad request') {
        super(message);
        this.name = 'BadRequestError';
    }
}

export const errorHandler: ErrorRequestHandler = async (err: any, req: Request, res: Response, next: NextFunction) =>  {
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
