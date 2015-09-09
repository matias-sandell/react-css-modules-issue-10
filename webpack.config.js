var getConfig = require('hjs-webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = getConfig({
	in: 'src/index.js',
	out: 'build',
	clearBeforeBuild: true
});

config.module.loaders.forEach(function (filter) {

	//Activate Babel Stage 0 for ES7 decorators
	if (filter.loaders) {
		filter.loaders.forEach(function(loader, idx, arr) {
			if (loader === 'babel-loader') {
				arr[idx] = 'babel-loader?stage=0'
			}
		})
	}

	// Activate React-css-modules
	if(filter.loader === 'style-loader!css-loader!postcss-loader') {
		filter = {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
		}
	}
})

config.plugins.push(new ExtractTextPlugin('app.css', { allChunks: true }));

module.exports = config;