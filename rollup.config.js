import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  output: {
    dest: pkg.main,
    format: 'cjs'
  },
  plugins: [
    babel({
      babelrc: false,
      presets: ['stage-3'],
      exclude: 'node_modules/**'
    })
  ]
};
