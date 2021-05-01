import esbuild from "esbuild";

esbuild.buildSync({
  entryPoints: ["in.js"],
  bundle: true,
  platform: "node",
  // target: ["node10.4"],
  outfile: "out.js",
  // sourcemap: true,
  target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: "out.js",
});

// import { execSync } from "child_process";
// // root folder of global node modules
// const root = execSync("npm root -g").toString().trim();
// const webpack = await import(`${root}/webpack/lib/index.js`)

// console.log(webpack);


// import json from "@rollup/plugin-json";
// import { terser } from "rollup-plugin-terser";

// export default {
//   input: "db.js",
//   output: {
//     file: "dist/bundle.js",
//     format: "AMD",
//   },
//   plugins: [
//     json(),
//     terser({
//       module: true,
//       ecma: 2019,
//       format: {
//         comments: false,
//       },
//     }),
//   ],
// };
