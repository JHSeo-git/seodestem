import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: false,
    },
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: [typescript(), commonjs()],
  // plugins: [typescript()],
};
