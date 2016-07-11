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
	devtool: "source-map",
	plugins: [
		// new webpack.optimize.UglifyJsPlugin()
		new webpack.OldWatchingPlugin(),
		//new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.DedupePlugin(),
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
				exclude: /node_modules/,
				loader: "file?name=[name].[ext]"
			}
		]
	}
}
