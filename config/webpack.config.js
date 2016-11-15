"use strict";

let path = require('path');
let webpack = require('webpack');
let extractTextPlugin = require('extract-text-webpack-plugin');
let extractSCSS = new extractTextPlugin('css/style.css'/*, {allChunks: true}*/);

module.exports = {
    entry: [
        __dirname + '/../src/sass/app.scss',
        __dirname + '/../src/js/main.js',
    ],
    output: {
        path: path.resolve(__dirname, '../public/'),
        filename: 'js/bundle.js',
    },
    devtool: 'source-map',
    devServer:{
        contentBase: 'public/'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.scss$/,
                loader: extractSCSS.extract('style','css!sass')
            }
        ]
    },
    plugins: [
        extractSCSS,
        new webpack.ProvidePlugin({
            Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
            fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]
};