// 公共配置
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, '../src/index.js'),

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015'],
                    plugins: ['syntax-dynamic-import'],
                },
            },
            // 处理图片资源
            {
                test: /\.(gif|png|jpg|jpeg|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 8kb 以下采用base64方式
                            limit: 8 * 1024,
                            // 分类到imgs文件夹中
                            outputPath: 'imgs',
                            name: '[hash:8].[ext]',
                        },
                    },
                ],
            },
            // 处理其他资源，排除以下资源的文件就是其他资源了
            {
                exclude: /\.(html|js|jsx|gif|png|jpg|jpeg|svg|less|css)/,
                loader: 'file-loader',
            },
        ],
    },

    plugins: [
        // 设置html模板
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
            favicon: resolve(__dirname, '../src/statics/icons/favicon.ico'),
        }),
    ],

    resolve: {
        // 省略编写文件后缀名
        extensions: ['.js', '.jsx', '.css', '.less'],
        // 使用别名，简化引用路径
        alias: {
            _const: resolve(__dirname, '../src/const'),
            _less: resolve(__dirname, '../src/less'),
            _statics: resolve(__dirname, '../src/statics'),
            _pages: resolve(__dirname, '../src/pages'),
            _components: resolve(__dirname, '../src/components'),
            _store: resolve(__dirname, '../src/store'),
        },
    },
};
