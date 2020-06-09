const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common,{
    mode: "production",
    output: {
        filename: "bundle.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new MiniCSSExtractPlugin(), new Dotenv({
        path: "./dev.env"
    })],
    module: {
        rules: [
              {
                test: /\.scss$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
            }
        ]
    },
})