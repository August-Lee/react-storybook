const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const getAbsPath = dist => path.resolve(__dirname, `../${dist}`);

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: [
            '@babel/polyfill',
            path.resolve(getAbsPath('src'), 'index.js')
        ]
    },
    output: {
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader', options: {sourceMap: true}
                    },
                    {
                        loader: 'less-loader', options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            'react-require'
                        ]
                    }
                }
            },
            {
                test: /\.(gif|jpg|png|html)\??.*$/,
                use: {
                    loader: 'url-loader?limit=1&name=[path][name].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: getAbsPath('index.ejs')
        }),
        new webpack.DefinePlugin({
            $NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        })
    ],
    devServer: {
        port: 3000
    }
};
