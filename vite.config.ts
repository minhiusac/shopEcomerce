import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'
import { wayfinder } from '@laravel/vite-plugin-wayfinder'

const isCI = process.env.CI === 'true' || process.env.RENDER === 'true' || process.env.VERCEL === '1'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        // Chỉ bật wayfinder nếu có PHP 
        !isCI && wayfinder({
            formVariants: true,
        }),
    ].filter(Boolean),
    esbuild: {
        jsx: 'automatic',
    },
})

