const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  name : 'reactCheck-setting',
  mode : 'development',       //실서비스 : production
  devtool : 'source-map',           //빠르게 hidden-source-map
  resolve : {
    extensions :['.jsx','.js'],
  },
  //
  entry :{
    app : './client',
  },//입력
  module : {
    rules : [
      {
        test : /\.jsx?$/,
        loader : 'babel-loader',
        options : {
          presets : [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins:['react-refresh/babel'],
        },
        exclude: path.join(__dirname, 'node_modules'), //제외시킨다
      }
    ]
  },
  plugins : [
    new ReactRefreshWebpackPlugin()
  ],
  output : {
    filename : '[name].js',
    path : path.join(__dirname,'dist'),
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
}