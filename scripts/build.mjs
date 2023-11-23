import * as esbuild from 'esbuild'
import { polyfillNode } from "esbuild-plugin-polyfill-node";

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/worker.js',
  plugins: [
    polyfillNode(
      {
        polyfills: {
          url: "empty",
          http: true,
        }
      }
    )
  ],
})
