const webpack = require('webpack');
const path = require('path');

const header = `InOut.js v0.1.1 (https://github.com/logiqsystem/inoutjs)
Copyright 2018 LogiQ System (https://logiqsystem.com)
Licensed under MIT (https://github.com/logiqsystem/inoutjs/blob/master/LICENSE)`;

module.exports = {
  mode: process.env.NODE_ENV.match(/production/) ? 'production' : 'development',
  entry: path.resolve(__dirname, './src/inout.js'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(header)
  ]
};
