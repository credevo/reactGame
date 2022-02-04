const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name : 'rock-scissors-paper-setting',
    mode : 'development', 
    devtool : 'source-map',
    resolve : {
        extensions : ['.jsx','.js'],
    },
    //
    //
    entry : {
        app : ['./client'],
    },
    output : {
      filename : '[name].js',
      path : path.join(__dirname,'dist'),
    },
    //
    //
    module :{
        rules: [
        {
          test: /\.jsx$/,
          loader : 'babel-loader' ,
          options : {
            presets: ['@babel/preset-env','@babel/preset-react'],
            
          }
        }
      ]
    },
    plugins : [
      new ReactRefreshWebpackPlugin()
    ],
    //
    //
    devServer: {
      devMiddleware: { publicPath: '/dist' },
      static: { directory: path.resolve(__dirname) },
      hot: true
    }
}