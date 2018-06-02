/**
 * @Author: AJI
 * @Date:   2018-05-31T08:35:01+08:00
 * @Email:  menzil@live.cn
 * @Last modified by:   AJI
 * @Last modified time: 2018-05-31T09:27:59+08:00
 */

// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.(css|sass)$/,
				use: ['style-loader', 'css-loader','sass-loader']
			},
			{
				test: /\.(png|svg|jpg|gif|jpeg)$/,
				use: ['url-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['url-loader']
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}


		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		hot: true
	}
}
