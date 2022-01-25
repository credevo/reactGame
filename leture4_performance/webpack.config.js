const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

// process.env.NODE_ENV = 'development';

module.exports = {
    name : 'leture4-setting',
    mode : 'development', //실서비스 : production , 개발 : development
    devtool : 'eval-source-map', //빠르게 : eval, 소스그대로 보고싶을 때 : eval-source-map  source-map 
    
    entry : {
        app : ['./client'],
    },//입력
    resolve : {
        extensions : ['.js','.jsx'],
    },    
    module :{
        rules: [
        {
          test: /\.jsx$/,
          loader : 'babel-loader' ,
          options : {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins : ['react-refresh/babel']
          },
          exclude : path.join(__dirname,'node_modules'),
        }
      ]
    },
    plugins : [new ReactRefreshWebpackPlugin()],
    output : {
      path : path.join(__dirname,'dist'),
      filename : '[name].js'
    },//출력
    devServer : {
      devMiddleware : {publicPath : '/dist'},
      static : {directory : path.resolve(__dirname)},
      hot : true
    }
}