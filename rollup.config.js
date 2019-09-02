import path from 'path';

import pkg from './package.json';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';
import autoPreprocess from 'svelte-preprocess';
import sass from 'rollup-plugin-sass';

import env from 'dotenv';

env.config();

const prod = process.env.SERVICE_ENV || 'local';
const host = process.env.SERVICE_HOST;
const port = process.env.SERVICE_PORT;
const mode = process.env.SERVICE_MODE;

export default {
  input: 'src/index.js',
  output: {
    sourcemap: prod === 'local',
    name: 'app',
    file: pkg.main,
    format: 'iife'
  },
  plugins: [
    replace({
      'process.env.API_URL': process.env.API_URL,
      'process.env.API_DOMAIN': process.env.API_DOMAIN,
    }),
    // TODO しょぼいので他の方法を考えましょう
    sass({
      output: 'dist/css/bundle.css',
    }),
    svelte({
      // TODO customize ??? mixinが気に入らない場合はカスタマイズしましょう
      preprocess: autoPreprocess({}),
      dev: prod === 'local',
      /*css: css => {
        css.write('dist/bundle.css', prod === 'local');
      }*/
    }),
    resolve(),
    commonjs(),
    prod === 'prd' && terser(),
    mode === 'watch' && serve({
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      host: host,
      port: port,
    }),
    mode === 'watch' && livereload({
      watch: ['src', 'public'],
      verbose: true, // Disable console output
    }),
  ],
  watch: {
    clearScreen: false
  }
};