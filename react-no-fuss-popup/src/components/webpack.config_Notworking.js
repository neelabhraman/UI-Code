const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


const config = {
    module: {},
	 mode: 'production',
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
    },
};

const js = Object.assign({}, config, {
   
    name: 'js',
    entry: path.resolve(__dirname, './Popup.js'),
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader',
            },

        ],
    },
    output: {
    path: path.resolve('dist'),
    filename: 'Popup.js',
    libraryTarget: 'commonjs2',
    },
    
});

const css = Object.assign({}, config, {
    name: 'css',
    entry: path.resolve(__dirname, './Popup.module.css'),
    plugins: [
        new MiniCssExtractPlugin({ filename: "Popup.module.css",}),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ]
            },
        ],
    }
});

module.exports = [js, css];
