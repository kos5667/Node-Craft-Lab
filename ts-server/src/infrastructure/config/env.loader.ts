import dotenv from 'dotenv';
import path from "path";

export interface AppEnv {
    // log level
    LOG_LEVEL: "debug" | "info" | "warn" | "error";
}

export async function loadEnv() {
    dotenv.config({ path: path.resolve(__dirname, `../../../config/.env.local`) });

    const { LOG_LEVEL } = process.env;

    return {
        LOG_LEVEL: LOG_LEVEL as AppEnv["LOG_LEVEL"],
    }
}
