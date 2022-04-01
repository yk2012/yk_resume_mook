const path = require("path");
const webpackMerge = require("wenpack-merge");
const baseConfig = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  mode: "development",
  entry: {
     // 👇 对应渲染进程的 app.jsx 入口文件
    index: path.resolve(__dirname, "../app/renderer/app.jsx"),
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  target: "electron-renderer",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    host: "127.0.0.1",
    port: "7001",
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: path.resolve(__dirname, "../app/renderer/index.html"),
      filename: path.resolve(__dirname, "../dist/index.html"),
      chunks: ["index"],
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);
