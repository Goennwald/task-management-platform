import { defineConfig } from "drizzle-kit";

import { env } from "./app/env.server";

export default defineConfig({
    dialect: "postgresql",
    schema: "./app/db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: env.DATABASE_URL,
    },
});
