const path = require('path');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name : 'TickTacTo',
    mode : 'development',
    devtool : 'eval-source-map',
    resolve : {
        extensions :['.jsx','.js'],
    },
    //
    entry : {
        app : ['./client'],
    },
    output : {
        path : path.join(__dirname,'dist'),
        filename : '[name].js',
    },
    module : {
        rules : [
            { 
                test : /\.jsx$/, 
                loader : 'babel-loader', 
                options : {
                    presets : ['@babel/preset-env','@babel/preset-react']
                }
            }
        ],
    },
    plugins : [
        new ReactRefreshPlugin()
    ],
    devServer : {
        devMiddleware : {
            publicPath : '/dist',
        },
        static : {
            directory : path.resolve(__dirname),
        },
        hot : true,
    }

}