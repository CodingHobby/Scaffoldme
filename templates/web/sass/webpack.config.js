const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ExtractSass = new ExtractTextPlugin({
	filename: "main.css"
})

module.exports = {
	entry: "./src/main.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			{
				test: /\.sass$/,
				use: ExtractSass.extract({
					use: [{
						loader: 'css-loader'
					}, {
						loader: 'sass-loader'
					}],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		ExtractSass
	]
}