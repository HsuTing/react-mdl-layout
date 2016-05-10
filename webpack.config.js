var path = require('path');
var webpack = require('webpack');

var ENV = !!(+process.env.NODE_ENV || 0);

var jsx_src = './example/src';
var jsx_dist = './example/dist';
var lib_src = './node_modules';

module.exports = {
    entry: {
        'index': path.resolve(jsx_src, 'index.jsx'),
        'common': [
            path.resolve(lib_src, 'react/react.js'),
            path.resolve(lib_src, 'react-dom/index.js'),
        ]
    },
    output: {
        filename: '[name].min.js',
        path: jsx_dist
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                query: {
                  presets: ['es2015', 'react']
                } 
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: ENV ? [ 
        new webpack.DefinePlugin({ "process.env": { NODE_ENV: JSON.stringify("production") } }),
        new webpack.optimize.CommonsChunkPlugin('common', 'common.min.js'),
        new webpack.optimize.UglifyJsPlugin({minimize: true})
    ] : [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.min.js'),
    ]
}
