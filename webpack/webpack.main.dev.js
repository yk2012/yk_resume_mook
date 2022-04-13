/**
 * 主进程的webpack配置
 */

const path = require('path');
const baseConfig = require('./webpack.base.js');
const webpackMerge = require('webpack-merge');

const mainConfig = {
  // 入口文件
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  // target 配置项可以让 Webpack 构建出不同运行环境的代码
  target: 'electron-main',
  // 打包输出
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  devtool: 'inline-source-map',
  mode: 'development',
};

module.exports = webpackMerge.merge(baseConfig, mainConfig);
