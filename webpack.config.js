var webpack = require("webpack");
var HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlPlugin({
            template: 'src/index.html'
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loaders: ['babel-loader']
        }]
    }
};