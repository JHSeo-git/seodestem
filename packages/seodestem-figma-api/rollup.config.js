import pkg from './package.json';
import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.ts, .js'];

export default args => {
  const plugins = [typescript()];
  let sourcemap = false;

  console.log(`Running ${args.debug ? 'debug' : 'production'} build...`);

  if (!args.debug) {
    plugins.push(terser());
    sourcemap = true;
  }

  delete args.debug;

  return {
    input: pkg.source,
    output: [
      {
        file: pkg.module,
        format: 'es',
        sourcemap,
      },
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap,
        exports: 'named',
      },
    ],
    external: [/@babel\/runtime/],
    plugins: [
      // ...plugins,
      typescript(),
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'runtime',
        extensions,
      }),
    ],
  };
};
