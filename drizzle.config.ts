import type { Config } from 'drizzle-kit';

import 'dotenv/config';

export default {
  schema: './src/db/schema.ts',
  out: './src/migrations',
  connectionString: process.env.DATABASE_URL,
} satisfies Config;
