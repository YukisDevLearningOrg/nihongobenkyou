import {defineConfig} from 'vite'
import { kvgJs } from 'kanjivg-js/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        kvgJs()
    ],
})
