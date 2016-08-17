/**
  webpack 开发环境配置文件
**/

'use strict';

import webpack from 'webpack';
import webpackConfig from './webpack.config';

let distWebpackConfig = Object.assign({}, webpackConfig);
distWebpackConfig.output.filename = 'bundle.js';

distWebpackConfig.plugins.push(
  new webpack.optimize.NoErrorsPlugin()
);
distWebpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warning: true
    }
  })
);

webpack(distWebpackConfig, { p: true }, (err, stat) => {
  console.log(err);
});
