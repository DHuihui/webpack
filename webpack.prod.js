const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common,{
	plugins:[
		new ExtractTextPlugin({
			filename:'./static/css/style.css'
		}),
	],
	optimization:{
		runtimeChunk:{
			name:"manifest"
		},
		splitChunks:{
			cacheGroups:{
				commons:{
					test:/[\\/]node_modules[\\/]/,
					name:"common",
					chunks:"all"
				}
			}
		}
	}	
});