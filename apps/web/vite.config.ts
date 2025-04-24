import { reactRouter } from '@react-router/dev/vite';
import { cloudflare } from '@cloudflare/vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

const MODE = process.env.NODE_ENV;

export default defineConfig(({ isSsrBuild }) => ({
    plugins: [
        cloudflare({
            viteEnvironment: { name: 'ssr' },
        }),
        tailwindcss(),
        reactRouter(),
        tsconfigPaths(),
    ],
}));
