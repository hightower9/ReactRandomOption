const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:'./src/app.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            test: /\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {    
        contentBase: "./build",  
    },
    plugins: [    
        new HtmlWebpackPlugin({      
            template: path.resolve('./build/index.html'),    
        }),  
    ],
};