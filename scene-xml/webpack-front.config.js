
const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle-front.js',
    path: path.resolve(__dirname, 'lib'),
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(
      /dom-parser/,
      './emptyModule'
    )
  ],
};