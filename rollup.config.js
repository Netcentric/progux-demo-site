import { terser } from "rollup-plugin-terser";
import scss from "rollup-plugin-scss";

export default {
  input: "src/js/main.js",
  plugins: [terser(), 
    scss({
    output: true,
    outputStyle: 'compressed',
  })],
  output: [
    {
      file: "js/min.js",
      format: "iife",
      sourcemap: true,
    },
  ],
};