import pkg from './package.json';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

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
  ]
};