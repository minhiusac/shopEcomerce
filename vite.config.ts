import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import laravel from 'laravel-vite-plugin'
import { wayfinder } from '@laravel/vite-plugin-wayfinder'

//  Tự phát hiện môi trường build (CI/CD hoặc cloud)
const isCI =
    process.env.CI === 'true' ||
    process.env.CI === '1' ||
    process.env.RENDER === 'true' ||
    process.env.VERCEL === '1' ||
    process.env.VERCEL === 'true' ||
    process.env.NODE_ENV === 'production'

console.log('Building environment:', isCI ? 'CI/Cloud (disable PHP)' : 'Local (enable PHP)')

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        // ⚡ Chỉ bật Wayfinder khi chạy local (có PHP)
        !isCI &&
        wayfinder({
            formVariants: true,
        }),
    ].filter(Boolean),
    esbuild: {
        jsx: 'automatic',
    },
})
