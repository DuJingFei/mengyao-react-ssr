const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        port: 6611,
       // hostname:'localhost',
        disableHostCheck: true
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
    ]
})
