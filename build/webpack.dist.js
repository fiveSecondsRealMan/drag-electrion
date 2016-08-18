/**
  webpack 开发环境配置文件
**/

'use strict';

import webpack from 'webpack';
import webpackConfig from './webpack.config';

let distWebpackConfig = Object.assign({}, webpackConfig);
distWebpackConfig.output.filename = 'bundle.js';
distWebpackConfig.externals = { react: 'window.React' };

distWebpackConfig.plugins.push(
  new webpack.NoErrorsPlugin()
);
distWebpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: true
    }
  })
);

webpack(distWebpackConfig, (error, stats) => console.log('' + stats));
