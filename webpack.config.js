var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  },
  module: {
    loaders: [
      { // 先安装好node-sass file-loader 此处有坑
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello world app'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}
