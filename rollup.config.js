import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";

export default [{
  input: "src/main/main.js",
  plugins: [
    terser(),
    scss({
      output: 'css/main.css',
      outputStyle: 'compressed',
      watch: ['src/main/*'],
    }),
  ],
  output: [
    {
      file: "js/min.js",
      format: "iife",
      sourcemap: true,
    },
  ],
},{
  input: 'src/demo/demo.js',
  output: [
    {
      file: 'js/demo.min.js',
      format: "iife",
    },
  ],
  plugins: [
    terser(),
    scss({
      output: 'css/demo.min.css',
      outputStyle: 'compressed',
      watch: ['src/demo/*'],
    }),
  ],
}];