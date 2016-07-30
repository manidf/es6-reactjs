module.exports = {
	entry: './index.js',
	output: {
		path: './public/',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3080
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
