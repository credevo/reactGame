const path = require('path');
// const webpack= require('webpack');
const LoaderOptionPlugin = require('webpack/lib/LoaderOptionsPlugin');

module.exports = {
    // name : 'gugudan-setting',
    //
    mode : 'development', //실서비스 : production
    devtool : 'eval', //빠르게 hidden-source-map
    resolve : {
      extensions :['.jsx','.js'],
    },
    //
    entry :{
      app : './client',
    },//입력
    module : {
      rules : [
        //babel-loader 옵션들
        {
          test : /\.jsx?$/,
          loader : 'babel-loader',
          options : {
            //프리셋 = 플러그인들의 집합
            presets : [
              '@babel/preset-env'
              // [
              // ,{
                // targets : {
                //   browsers : ['> 1% in KR','last 2 chrome versions'], // browserslist 문자열 
                // },
                // debug : true,
              // }
            // ]
              ,
              '@babel/preset-react'
            ],
            plugins:[
            ],
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
/**
 * package.json 에 browserslist 속성 에 쿼리형태로 정의 browserslist : [{'query'}]
 * 브라우저스리스트는 브라우저 환경을 정의할 때 쿼리라는 간단한 문법을 사용합니다. 
 * 대응할 브라우저와 버전을 쉽게 정의할 수 있어요.
 * https://blog.shiren.dev/2020-12-01/ 
 * 
 */