import { existsSync } from "node:fs";
import { z } from "zod";

// Neither Node nor Vite loads `.env` into `process.env` for server code.
// The file is optional because deployed environments set the variables directly.
if (existsSync(".env")) {
    process.loadEnvFile();
}

const envSchema = z.object({
    DATABASE_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);
