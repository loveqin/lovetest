var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: "cheap-module-inline-source-map ",
    entry: {
        app:[
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/dev-server',

        /*'webpack/hot/dev-server',*/ './src/example.js', //入口文件路径，也就是要被打包的文件路径
                // __dirname 是 nodejs的一个全局变量，指的是当前执行文件所在文件夹 ，这里指的是lovetest

    ]},
    output: {
        path: path.resolve( __dirname, "srcprd" ),   //输出文件路径，也就是打包好的文件路径
        filename: '[name].bundle.js', //entry可以是一个obj，键值对的形式，如：
        // entry: {
        //entry1: './entry/entry1.js',
        //entry2: './entry/entry2.js'}
        //这里的[name]拿到的就是 entry1和entry2
        publicPath: '/assets/'

    },
    /*devServer:{
        contentBase:"./",
        port:"3001",
        inline: true,
        historyApiFallback: true
    },*/
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        /*commonsPlugin,
        new ExtractTextPlugin("[name].css")*/
        ],
    module:{
        loaders:[
            {
                test : /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}
// module.exports = {
//     entry: {
//         app: [ "./src/example.js" ]
//     },
//     output: {
//         path: path.resolve( __dirname, "build" ),
//         publicPath: "/assets/",
//         filename: "bundle.js"
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.css$/,
//                 loader: 'style-loader!css-loader'
//             }
//         ]
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin()
//     ]
// };