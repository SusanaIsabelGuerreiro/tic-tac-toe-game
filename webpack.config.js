const prod = process.env.NODE_ENV === "production";

const HtmlWebPackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "index.html",
});
const eslintPlugin = new ESLintPlugin({
  extensions: ["js", "jsx", "ts", "tsx"],
});

module.exports = {
  mode: prod ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
    ],
  },
  plugins: [htmlPlugin, eslintPlugin],
  devServer: {
    open: true,
  },
};
