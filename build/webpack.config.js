/**
  webpack 基础配置文件
**/

'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

/**
 路径
**/

const __ROOTPATH__ = path.resolve(__dirname, '..');
const __DEVPATH__ = path.join(__ROOTPATH__, 'client', 'src');
const __DISTPATH__ = path.join(__ROOTPATH__, 'client', 'dist');

/**
  资源别名
**/

let resAlias = {};

// 组件别名
Object.assign(resAlias, {
  components: path.join(__DEVPATH__, 'components')
});

// todo

/**
  webpack 配置选项
**/
module.exports = {

  // 入口文件目录
  context: __DEVPATH__,

  // 入口文件路径
  entry: {
    app: [ './app.js' ]
  },

  // 导出文件路径
  output: {
    path: __DISTPATH__,
    chunkFilename: '[id].[chunkhash].js'
  },

  resolve: {
    alias: resAlias,
    extensions: ['', '.js', '.jsx', '.css', '.html']
  },

  // loader
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.jsx?$/i,
        loader: 'babel',
        include: __DEVPATH__,
        exclude: /node_modules/
      }, {
        test: /\.html?$/i,
        loader: 'html'
      }, {
        test: /\.css$/i,
        loader: ExtractTextPlugin.extract('style', 'css', { allChunks: true })
      }, {
        test: /\.(png|gif|svg|jpe?g)/i,
        loader: "url",
        query: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(__DEVPATH__, 'pages', 'index.html'),
      inject: true,
      files: {
        css: ['bundle.css']
      }
    })
  ]

};
