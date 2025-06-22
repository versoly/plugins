import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  shims: true,
  clean: true,
  dts: {
    resolve: true,
    entry: {
      index: 'src/index.ts',
    },
    compilerOptions: {
      skipLibCheck: true,
      moduleResolution: 'node',
    },
  },
  outExtension: ({ format }) => {
    let js = '.cjs';

    if (format === 'esm') {
      js = '.mjs';
    }

    if (format === 'iife') {
      js = '.global.js';
    }

    return { js };
  },
});
