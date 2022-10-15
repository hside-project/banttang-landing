const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        open: true,
        hot: true,
        compress: true,
        port: 8080,
        historyApiFallback: true,
        liveReload: true,
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '../dist'),
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
});
