/**
 * Created by loveqin on 17/3/22.
 */

 var webpack = require('webpack');
 var webpackDevServer = require('webpack-dev-server');
 var config = require('./webpack.config');

 new webpackDevServer(webpack(config),{
     publicPath: '/assets/',
     hot: true,
     //historyApiFallback: true,
     stats: {colors: true}
     }).listen(3001, 'localhost',function (err, result) {
     if (err){
     return console.log(err);
     }
     console.log('listening at http://localhost:3001/');
 });

// var webpack = require( 'webpack' );
// var WebpackDevServer = require( 'webpack-dev-server' );
//
// var config = require( "./webpack.config.js" );
// config.entry.app.unshift( "webpack-dev-server/client?http://localhost:3001/", "webpack/hot/dev-server" );
//
// var compiler = webpack( config );
//
// var server = new WebpackDevServer( compiler, {
//     publicPath: "/assets/",
//     hot: true,
//     stats: {
//         colors: true
//     }
// } );
//
// server.listen( 3001 );