import pkg from './package.json';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import serve from 'rollup-plugin-serve';
import path from "path";

export default {
  input: 'src/index.js',
  output: {
    sourcemap: 'local',
    name: 'app',
    file: pkg.main,
    format: 'iife'
  },
  plugins: [
    svelte({
      dev: 'local',
    }),
    resolve(),
    commonjs(),
    serve({
      contentBase: path.join(__dirname, 'dist'),
      historyApiFallback: true,
      host: 'localhost',
      port: 8080,
      /*https: {
        key: key,
        cert: crt,
      },*/
    }),
  ],
  watch: {
    clearScreen: false
  }
};