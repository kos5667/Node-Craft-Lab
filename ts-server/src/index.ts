import winston from 'winston';
import { Application } from "express";
import { loadEnv, AppEnv } from "./infrastructure/config/env.loader"
import { InitializeLogger } from './utils/logger'

interface AppContext {
    app: Application;
    env: AppEnv;
}

type StepFunction = (context: AppContext) => Promise<void>;

const steps: StepFunction[] = [
    async (context: AppContext) => {
        console.log('Hello World!');
    },

    /**
     * Initialize AppEnv Config
     * @param context
     */
    async (context: AppContext) => {
        context.env = await loadEnv();
    },

    /**
     * Initialize winston logger
     * @param context
     */
    async (context: AppContext) => {
        await InitializeLogger(context.env.LOG_LEVEL);

        winston.debug('Initialize Logger');
        winston.info('Initialize Logger');
        winston.warn('Initialize Logger');
        winston.error('Initialize Logger');
    }
];

(async (): Promise<void> => {
    const context: AppContext = {
        app: undefined as any,
        env: undefined as any
    }

    try {
        for (const step of steps) {
            await step(context);
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
})();
