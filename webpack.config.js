var webpack = require('webpack');
var path = require('path');

module.exports = {
    context:__dirname + '/src',
    entry:"./js/root.js",
    devServer:{
        disableHostCheck: true
    },
    module:{
        loaders:[{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query:{
                presets:['react','es2015'],
                plugins:['react-html-attrs'],//添加插件配置
            }
        },
        //配置css的loader,ant-design的配置文件
        {
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },
    ]
    },
    devtool:'source-map',
    output:{
        path:__dirname+"/src/",
        filename:"bundle.js"
    }
};