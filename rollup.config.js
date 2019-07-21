import path from 'path'

import pkg from './package.json';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace'
import env from 'dotenv';

env.config();

const mode = process.env.SERVICE_ENV || 'local';
const host = process.env.SERVICE_HOST;
const port = process.env.SERVICE_PORT;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: true,
    name: 'app',
    file: pkg.main,
    format: 'iife'
  },
  plugins: [
    replace({
      'process.env.API_URL': process.env.API_URL,
    }),
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
      host: host,
      port: port,
    })
  ],
  watch: {
    clearScreen: false
  }
};