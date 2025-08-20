import winston from 'winston';
import { Application } from "express";
import { loadEnv, AppEnv } from "./infrastructure/config/env.loader"
import { InitializeLogger } from './utils/logger'
import { InitializeDatabase } from './infrastructure/database/JsonDB'

interface AppContext {
    phase: string;
    app: Application;
    env: AppEnv;
}

type StepFunction = (context: AppContext) => Promise<void>;

const steps: StepFunction[] = [
    /**
     * Initialize Phase
     */
    async (context: AppContext) => {
        context.phase = process.argv[3];
    },

    /**
     * Initialize AppEnv Config
     */
    async (context: AppContext) => {
        context.env = await loadEnv(context.phase);
    },

    /**
     * Initialize winston logger
     */
    async (context: AppContext) => {
        await InitializeLogger(context.env.LOG_LEVEL);
        winston.info('Initialize Logger Successfully.');
    },

    /**
     * Initialize database
     */
    async (context: AppContext) => {
        await InitializeDatabase();
    },

    /**
     * The Server is prepared
     */
    async (context: AppContext) => {
        winston.info('╔══════════════════════════════════════╗')
        winston.info(`║   * '🚀 Server' is UP & RUNNING! *   ║`);
        winston.info('╚══════════════════════════════════════╝')
    }
];

(async (): Promise<void> => {
    const context: AppContext = {
        phase: 'local',
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
