import dotenv from 'dotenv';
import path from "path";

export interface AppEnv {
    // log level
    LOG_LEVEL: "debug" | "info" | "warn" | "error";
}

export async function loadEnv(phase: string) {
    dotenv.config({ path: path.resolve(__dirname, `../../../config/.env.${phase ?? 'local'}`) });

    const { LOG_LEVEL } = process.env;

    return {
        LOG_LEVEL: LOG_LEVEL as AppEnv["LOG_LEVEL"],
    }
}
