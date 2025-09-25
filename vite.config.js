import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';


const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    // base: 'https://github.com/N0ZM/site/', 
    base:'./', 
    build: {
        assetsDir:'./', 
        outDir: 'docs', 
        rollupOptions: {
            input: {
                '': resolve(__dirname, 'index.html'), 
                1: resolve(__dirname, '1/index.html'), 
                2: resolve(__dirname, '2/index.html'), 
                'agents/1': resolve(__dirname, 'agents/1/index.html'), 
                'agents/2': resolve(__dirname, 'agents/2/index.html'), 
            }
        }
    }
});
