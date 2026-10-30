import { existsSync } from "node:fs";
import { z } from "zod";

if (existsSync(".env")) {
    process.loadEnvFile();
}

const envSchema = z.object({
    DATABASE_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);
