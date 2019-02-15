const pwd = process.cwd();
const path = require('path');
const webpack = require('webpack');
const BabelExternalHelpersWebpackPlugin = require('../index');

webpack({
  mode: 'production',
  entry: {
    'build': './index.js'
  },
  context: pwd,
  output: {
    path: path.join(pwd, 'test')
  },
  optimization: {
    minimize: false
  },
  stats: {
    colors: true,
    all: false,
    modules: true,
    maxModules: 0,
    errors: true,
    warnings: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-external-helpers']
        }
      }
    ]
  },
  plugins: [
    new BabelExternalHelpersWebpackPlugin({
      babel: require('@babel/core')
    })
  ],
  node: {
    fs: 'empty'
  }
}, function(err, stats) {
  process.stdout.write(stats.toString({
    cached: false,
    cachedAssets: false,
    colors: true,
  }));
});