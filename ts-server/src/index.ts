import { loadEnv, AppEnv } from "./infrastructure/config/env.loader"
import { Application } from "express";

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

    async (context: AppContext) => {
        console.log(context.env);
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
