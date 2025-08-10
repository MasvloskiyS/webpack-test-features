import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin, { Configuration } from "mini-css-extract-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import { IBuildOptions } from "./types"
import { DefinePlugin } from "webpack"

export const buildPlugins = ({ mode, paths, analyzer, platform }: IBuildOptions): Configuration['plugins'] => {
    const isDev = mode === 'development'
    const isProd = mode === 'production'

    if (isDev) {
       return [
            new ForkTsCheckerWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: paths.html,
            }),
            new DefinePlugin({
                __PLATFORM__: JSON.stringify(platform)
            }),
            new ReactRefreshWebpackPlugin()
        ]
    }

    if (isProd) { 
        return [
            new HtmlWebpackPlugin({
                template: paths.html,
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
            new DefinePlugin({
                __PLATFORM__: JSON.stringify(platform)
            }),
            analyzer && new BundleAnalyzerPlugin()
        ]
    }
}