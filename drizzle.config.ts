import { defineConfig } from 'drizzle-kit';
import { loadEnvConfig } from '@next/env';

const projectDir = process.cwd();
loadEnvConfig(projectDir);

export default defineConfig({
    schema: './src/app/api/persistence/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        //
       url: process.env.POSTGRES_URL!,
    },
    migrations: {
        table: "migrations",
        schema: "public"
    }
});