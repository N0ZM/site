import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                1: resolve(__dirname, '1/index.html'), 
                2: resolve(__dirname, '2/index.html')
            }
        }
    }
});
