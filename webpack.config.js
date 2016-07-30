module.exports = {
	entry: './src/js/index.js',
	output: {
		path: './dist/',
		filename: 'bundle.js',
		publicPath: '/'
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3080
	},
	module: {
		loaders: [
			{
				test: /(\.jsx$|\.js$)/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
