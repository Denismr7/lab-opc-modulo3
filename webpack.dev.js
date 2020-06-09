const path = require('path');
const merge = require('webpack-merge')
const common = require('./webpack.common')
const Dotenv = require('dotenv-webpack')

module.exports = merge(common,{
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
              {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    plugins: [new Dotenv({
        path: "./dev.env"
    })]
})