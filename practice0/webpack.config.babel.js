import webpack from 'webpack'

export default {
	context: __dirname + "/src",
	entry: {
		javascript: "./app.js",
		html: "./index.html"
	},
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
		extensions: ["", ".js"],
	},
	devtool: "inline-source-map",
	plugins: [
		// new webpack.optimize.UglifyJsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]"
			}
		]
	}
}
