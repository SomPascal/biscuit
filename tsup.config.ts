import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'], // <- remove 'cjs' here
  dts: true,
  sourcemap: true,
  clean: true,
});