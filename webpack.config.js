var webpack             = require('webpack');
var react               = require('react');
var path                = require('path');
var ExtractTextPlugin   = require("extract-text-webpack-plugin");

module.exports = {

  devtool: "source-map",

  devServer : {
    colors  : true,
    hot     : true,
    inline  : true,
    port    : 8898,
  },

  entry : {
    main    : ['./preview/main'],
  },

  output : {
    path        : __dirname,
    filename    : 'main.js',
    publicPath  : '/'
  },

  module : {
    loaders : [{
      test    : /\.js?$/,
      exclude : /node_modules/,
      loaders : ['react-hot','babel?presets[]=react,presets[]=es2015,presets[]=stage-2']
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  },

  plugins : [
  new webpack.HotModuleReplacementPlugin(),
  new ExtractTextPlugin("style.css")
  ]
}
