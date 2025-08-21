import { Application } from 'express';
import http, { Server as HttpServer } from 'http';

export function createHttpServer(app: Application): HttpServer {
    return http.createServer(app);
}
