const Path = require('path')

module.exports = {
	entry: {
		app: Path.resolve('./src/StartApp.mjs'),
	},
	stats: 'errors-only',
	output: {
		path: Path.resolve('dist', 'client'),
		filename: '[name].js',
		publicPath: '',
	},
	devServer: {
		contentBase: Path.resolve('html'),
		host: '0.0.0.0',
	},
}
