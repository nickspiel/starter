/** @type {import('@rspack/cli').Configuration} */
export default {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: new URL("./dist", import.meta.url).pathname,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  mode: "development",
};
