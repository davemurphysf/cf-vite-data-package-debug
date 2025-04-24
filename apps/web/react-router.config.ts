import { type Config } from '@react-router/dev/config';
export default {
    // Defaults to true. Set to false to enable SPA for all routes.
    ssr: true,
    future: {
        unstable_viteEnvironmentApi: true,
    },
} satisfies Config;
