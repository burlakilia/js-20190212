const path = require('path');

console.log(path.resolve('./dist'));

module.exports = {
  entry: path.resolve('./auth/auth.js'),
  output: {
    path: path.resolve('./dist'),
    filename: 'auth.js'
  },
  devtool: 'eval-source-map',
  module: {

    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }
    }, {
      test: /\.pug$/,
      use: 'pug-loader'
    }, {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]

  }

};
