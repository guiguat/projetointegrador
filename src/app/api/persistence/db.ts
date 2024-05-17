import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema'
import './drizzleEnvConfig'
// In-memory Postgres
const queryClient = postgres(process.env.POSTGRES_URL!);
const db = drizzle(queryClient, { schema });
export default db;