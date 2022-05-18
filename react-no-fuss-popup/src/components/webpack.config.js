const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './Popup.js',
    output: {
        path: path.resolve('dist'),
        filename: 'Popup.js',
        libraryTarget: 'commonjs2',
    },
    plugins: [

        new MiniCssExtractPlugin(
            {
                filename: "Popup.module.css",
            }
        ),
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    //MiniCssExtractPlugin.loader, // instead of style-loader
                    //'css-loader'
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ]
            }
        ],
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    externals: {
        // Don't bundle react or react-dom
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        }
    }
};