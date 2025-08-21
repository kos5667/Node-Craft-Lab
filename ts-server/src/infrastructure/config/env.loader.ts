import dotenv from 'dotenv';
import path from "path";

export interface AppEnv {
    // log level
    LOG_LEVEL?: "debug" | "info" | "warn" | "error";
    PORT?: number;
}

export async function loadEnv(phase: string) {
    dotenv.config({ path: path.resolve(__dirname, `../../../config/.env.${phase ?? 'local'}`) });
    return process.env as AppEnv
}
