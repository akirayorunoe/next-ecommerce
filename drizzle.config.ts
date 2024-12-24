import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env.local",
});

export default defineConfig({
  out: "./server/migrations",
  dialect: "postgresql",
  schema: "./server/schema.ts",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
