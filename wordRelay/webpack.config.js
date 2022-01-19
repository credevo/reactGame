const path = require('path');
const LoaderOptionPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    // name : 'webpack',
    mode : 'development',       //실서비스 : production
    devtool : 'eval',           //빠르게 hidden-source-map
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
              ['@babel/preset-env',{
                targets : {
                  browsers : ['> 1% in KR','last 2 chrome versions'], // browserslist 문자열 
                },
                debug : true,
              }],
              '@babel/preset-react'
            ],
            plugins:[],
          }
        }
      ]
    },
    plugins : [
      new LoaderOptionPlugin({debug:true})
    ],
    output : {
      filename : '[name].js',
      path : path.join(__dirname,'dist'),
    }

}