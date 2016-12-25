let webpack = require('webpack');
let PROD = JSON.parse(process.env.PROD_ENV || '0');
if(PROD === 1) {
	console.log("Creating optimized production build ...");
}

module.exports = {
    entry: './client.js',
    output: {
		filename: PROD ? 'bundle.min.js' : 'bundle.js',
        path: 'public'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
	plugins: PROD ? [
			new webpack.optimize.UglifyJsPlugin({
					compress: { warnings: false }
				})
		] : [],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'babel-preset-es2015'],
                    plugins: ['transform-react-jsx',
                              'transform-decorators-legacy',
                              'transform-class-properties']
                }
            }
        ]
    }
};
