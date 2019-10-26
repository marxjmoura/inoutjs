const webpack = require('webpack');
const path = require('path');

const header = `InOut.js v0.1.3 (https://github.com/marxjmoura/inoutjs)
Copyright (c) 2018-present Marx J. Moura (https://github.com/marxjmoura)
Licensed under MIT (https://github.com/marxjmoura/inoutjs/blob/master/LICENSE)`;

const isProduction = process.env.NODE_ENV.match(/production/);

const config = {
  mode: isProduction ? 'production' : 'development',
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

if (isProduction) {
  config.output = {
    path: path.resolve(__dirname, 'dist'),
    filename: 'inout.js',
    libraryTarget: 'umd',
    library: 'inoutjs',
    umdNamedDefine: true,
    globalObject: `(typeof self !== 'undefined' ? self : this)`
  };
}

module.exports = config;
