import { type DrizzleConfig, sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import * as schema from './schema';

interface CreateDrizzleOptions {
    databaseUrl: string;
}

export default function createDrizzle({
    databaseUrl,
}: CreateDrizzleOptions) {

    if (!databaseUrl) {
        throw new Error('databaseUrl is required');
    }

    const config = {
        casing: 'snake_case',
        schema,
    } satisfies DrizzleConfig<typeof schema>;

    return drizzle({
        client: postgres(databaseUrl, { prepare: false }),
        ...config,
    });
}
