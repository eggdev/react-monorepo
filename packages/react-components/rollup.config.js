const commonjs = require('@rollup/plugin-commonjs');
const { babel } = require('@rollup/plugin-babel');

const pkg = require('./package.json');

module.exports = {
  external(id) {
    return ['@material-ui', 'prop-types', 'react'].includes(id.split('/')[0]);
  },
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      rootMode: 'upward',
    }),
    commonjs(),
    peerDepsExternal(),
  ],
};
