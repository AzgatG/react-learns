var path = require('path')
const { resolve } = require('path');
const webpack = require('webpack');


module.exports = {
    devtool: 'source-map',
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React
    
        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint
    
        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    },

    devServer: {
        hot: true,
        inline:true,
        // enable HMR on the server
    
        // contentBase: resolve(__dirname, 'build'),
        // match the output path
        // port: 8080,
        // publicPath: '/'
        // match the output `publicPath`
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally
    
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates
    ],
}