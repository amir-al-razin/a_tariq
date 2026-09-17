import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { paraglideVitePlugin } from '@inlang/paraglide-js'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'

function arabicTtsPlugin() {
  const pyBin = '/home/amir/.gemini/antigravity-cli/brain/b65d2143-50bd-472e-9a48-e871985a1f8d/scratch/venv/bin/python';
  const scriptPath = path.resolve(__dirname, 'scripts/synthesize_tts.py');
  return {
    name: 'arabic-tts-plugin',
    configureServer(server: any) {
      server.middlewares.use('/api/tts', async (req: any, res: any) => {
        try {
          const url = new URL(req.url, 'http://localhost:3000');
          const text = url.searchParams.get('text');
          if (!text) {
            res.statusCode = 400;
            res.end('Missing text parameter');
            return;
          }

          if (fs.existsSync(pyBin) && fs.existsSync(scriptPath)) {
            res.setHeader('Content-Type', 'audio/mpeg');
            res.setHeader('Cache-Control', 'public, max-age=86400');
            const proc = spawn(pyBin, [scriptPath, text]);
            proc.stdout.pipe(res);
            proc.on('error', () => {
              if (!res.headersSent) {
                res.statusCode = 500;
                res.end('TTS process error');
              }
            });
            return;
          }

          const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=ar&client=tw-ob`;
          const response = await fetch(ttsUrl, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
          });
          if (!response.ok) {
            res.statusCode = response.status;
            res.end('Failed to fetch TTS');
            return;
          }
          res.setHeader('Content-Type', 'audio/mpeg');
          res.setHeader('Cache-Control', 'public, max-age=86400');
          const arrayBuffer = await response.arrayBuffer();
          res.end(Buffer.from(arrayBuffer));
        } catch (err: any) {
          res.statusCode = 500;
          res.end('Internal TTS error: ' + err.message);
        }
      });
    }
  };
}

const config = defineConfig({
  server: {
    port: 3000,
    strictPort: true,
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
    tsconfigPaths: true,
  },
  plugins: [
    arabicTtsPlugin(),
    devtools(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
      strategy: ['url', 'baseLocale'],
    }),
    tailwindcss(),
    tanstackStart(),
    nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    viteReact(),
  ],
})

export default config
