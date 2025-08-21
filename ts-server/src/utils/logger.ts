/**
 * Winston Logger Utility
 */
import winston, { format, transports } from 'winston';
const { combine, timestamp, printf, colorize, errors } = format;

export async function InitializeLogger(_level: string = 'debug'): Promise<void> {
    winston.configure({
        level: _level ?? 'debug',
        format: combine(
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            errors({ stack: true }),
            colorize(),
            printf(({ timestamp, message, level }) => {
                return `${timestamp} ${level}: ${message}`;
            })
        ),
        transports: [new transports.Console()]
    })
}
