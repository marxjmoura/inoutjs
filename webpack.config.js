var path = require('path');

module.exports = {
  mode: process.env.NODE_ENV.match(/production/) ? 'production' : 'development',
  entry: path.resolve(__dirname, './src/inout.js'),
  resolve: {
    modules: [path.resolve(__dirname, 'src')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  }
};
