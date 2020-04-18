import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const dist = 'dist'
const bundle = 'bundle'
const name = 'ReactAKCssSpinners'
const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      file: `${dist}/${bundle}.cjs.js`,
      format: 'cjs'
    },
    {
      name: `${name}`,
      file: `${dist}/${bundle}.umd.js`,
      globals: {
        react: 'React'
      },
      format: 'umd'
    },
    {
      file: `${dist}/${bundle}.esm.js`,
      format: 'esm'
    },
    {
      name: `${name}`,
      file: `${dist}/${bundle}.iife.js`,
      globals: {
        react: 'React'
      },
      format: 'iife'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    production && terser()
  ]
}
