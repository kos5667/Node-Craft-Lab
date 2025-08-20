import { Application } from "express";

interface AppContext {
    app: Application;
}

type StepFunction = (context: AppContext) => Promise<void>;

const steps: StepFunction[] = [
    async (context: AppContext) => {
        console.log('Hello World!');
    },
];

(async () => {
    const context: AppContext = {
        app: undefined as any
    }

    try {
        for (const step of steps) {
            await step(context);
        }
    } catch (err) {
        console.error(err);
        process.exit(0);
    }
})();
