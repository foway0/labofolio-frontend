import path from 'path'

import pkg from './package.json';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';

const mode = process.env.SERVICE_ENV || 'local';

export default {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    name: 'app',
    file: pkg.main,
    format: 'iife'
  },
  plugins: [
    svelte({
      dev: true,
      css: css => {
        css.write('dist/bundle.css');
      }
    }),
    resolve(),
    commonjs(),
    mode === 'local' && livereload('public'),
    // FIXME prd
    mode === 'local' && terser(),
    serve({
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      host: 'localhost',
      port: 8080,
    })
  ],
  watch: {
    clearScreen: false
  }
};