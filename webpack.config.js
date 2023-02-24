const path = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const dotenv = require("dotenv")
dotenv.config()

const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'dist')

module.exports = {
    devServer: {
        hot: true,
        port: 9002,
        static: path.join(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    entry: {
        app: {
            dependOn: "vendor",
            import: APP_DIR + '/index.tsx'
        },
        vendor: [
            '@reduxjs/toolkit',
            '@redux-saga/core',
            'react',
            'react-dom',
            'react-redux',
            'redux',
        ],
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [{ loader: 'url-loader' }],
            },
            {
                exclude: /node_modules/,
                include: APP_DIR,
                test: /\.(js|jsx|ts|tsx)$/,
                use: [{ loader: 'babel-loader' }],
            },
        ],
    },
    output: {
        filename: '[name].prod.js',
        path: BUILD_DIR,
    },
    plugins: [
        new webpack.DefinePlugin({
            firebaseApiKey: JSON.stringify(process.env.FIREBASE_API_KEY),
            firebaseAppId: JSON.stringify(process.env.FIREBASE_APP_ID),
            mode: JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new ESLintPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            title: "Games"
        })
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src', 'components'),
            sagas: path.resolve(__dirname, 'src', 'sagas'),
            store: path.resolve(__dirname, 'src', 'store'),
            theme: path.resolve(__dirname, 'src', 'theme'),
            utils: path.resolve(__dirname, 'src', 'utils'),
        },
        extensions: ['.css', '.js', '.jsx', '.json', '.scss', '.ts', '.tsx'],
        modules: ['node_modules'],
    },
}
