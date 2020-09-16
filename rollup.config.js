import pkg from './package.json';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import preprocess from 'svelte-preprocess';
import path from "path";

const crt = process.env.SSL_CERT;
const key = process.env.SSL_KEY;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: 'local',
    name: 'app',
    file: pkg.main,
    format: 'iife'
  },
  plugins: [
    replace({
      'API_URL': process.env.API_URL,
    }),
    svelte({
      preprocess: preprocess({
        defaults: {
          markup: 'pug',
        },
      }),
      dev: 'local',
    }),
    resolve(),
    commonjs(),
    serve({
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      host: 'localhost',
      port: 8080,
      https: {
        key: key,
        cert: crt,
      },
    }),
  ],
  watch: {
    clearScreen: false
  }
};