import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import virtual from "@rollup/plugin-virtual";
import compiledTree from "./src/tree";

const plugins = [
  virtual({
    "src/tree": `export default ${JSON.stringify(compiledTree)}`,
  }),
  typescript({
    useTsconfigDeclarationDir: true,
    tsconfigOverride: {
      exclude: ["node_modules", "build", "tests"],
    },
  }),
  resolve({ preferBuiltins: false }),
  commonjs(),
  terser(),
];

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "build/mjs/index.mjs",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins,
  },
  {
    input: "src/index.ts",
    output: [
      {
        file: "build/cjs/index.cjs",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins,
  },
];
