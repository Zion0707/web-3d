// 生产配置
const { resolve } = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.config.base.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodConfig = {
    // 输出打包文件
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
        publicPath: '/', // 或cdn地址 https://cdn.example.com/
    },

    module: {
        rules: [
            // 处理样式资源
            {
                test: /\.(less|css)$/,
                use: [
                    // MiniCssExtractPlugin.loader 是为了提取 提取js中的css成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
        ],
    },

    plugins: [
        // 清除已打包的生产文件
        new CleanWebpackPlugin(),
        // // 复制指定文件到某个位置
        // new CopyWebpackPlugin({
        //     patterns: [
        //         {
        //             from: resolve(__dirname, '../src/login.html'),
        //             to: resolve(__dirname, '../dist'),
        //         },
        //     ],
        // }),
        // 开启css从js抽离，避免js加载css导致闪屏问题
        new MiniCssExtractPlugin({
            filename: 'css/[chunkhash:8].css',
        }),
        // css 文件压缩
        new OptimizeCssAssetsWebpackPlugin(),

        // 查看打包文件大小
        // new BundleAnalyzerPlugin({
        //     //  端口查看
        //     analyzerPort: 3001,
        // }),
    ],

    mode: 'production',
};

// 合并配置对象
module.exports = merge(baseConfig, prodConfig);
