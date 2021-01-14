import pkg from './package.json';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import preprocess from 'svelte-preprocess';
import sass from 'rollup-plugin-sass';
import path from "path";

const crt = process.env.SSL_CERT;
const key = process.env.SSL_KEY;
const mode = process.env.SERVICE_MODE;

const serveOptions = {
  contentBase: path.join(__dirname, 'dist'),
  historyApiFallback: true,
  host: 'localhost',
  port: 8080,
}

if (crt && key) {
  serveOptions.https = {
    key: key,
    cert: crt,
  };
}

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
    sass({
      output: 'dist/css/bundle.css',
    }),
    svelte({
      preprocess: preprocess(),
      dev: 'local',
    }),
    resolve(),
    commonjs(),
    mode === 'watch' && serve(serveOptions),
  ],
  watch: {
    clearScreen: false
  }
};