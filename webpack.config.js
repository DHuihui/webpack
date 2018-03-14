const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports={
	entry:{
		app:'./src/js/index.js',
		print:'./src/js/print.js' 
	},
	devServer:{
		contentBase:'./dist'
	},
	devtool: 'inline-source-map',
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'输出管理',
			filename:'index.html',
			template:'./src/index.html',
			inject:'body'
		}),
		new HtmlWebpackPlugin({
			title:'电影',
			filename:'movie.html',
			template:'./src/movie.html',
			inject:'head',
			chunks:['print']
		})
	],
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:ExtraTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader"
				})
			},
			{
				test:/\.scss$/,
				use:ExtraTextPlugin.extract({
					fallback:'style-loader',
					use:['css-loader',
						'sass-loader',
					]
				})
			},
			{
				test:/\.(png|jpg|svg|gif)$/,
				use:[
					'file-loader'
				]
			}
		]
	}
};