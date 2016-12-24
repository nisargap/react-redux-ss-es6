module.exports = {
    entry: './client.js',
    output: {
        filename: 'bundle.js',
        path: 'public'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
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
                              'transform-decorators',
                              'transform-class-properties']
                }
            }
        ]
    }
};
