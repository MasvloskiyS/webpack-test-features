import path from 'path';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevServer';
import { buildResolvers } from './buildResolvers';
import { IBuildOptions } from './types';

export const buildWebpack = (options: IBuildOptions): webpack.Configuration => {
    const { mode, paths } = options
    const isDev = mode === 'development';

    const config: webpack.Configuration = {
        mode: mode ?? 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true,
        },

        module: {
            rules: buildLoaders(options)
        },

        resolve: buildResolvers(options),
        
        plugins: buildPlugins(options),

        devtool: isDev ? 'inline-source-map' : false,

        devServer: isDev
            ? buildDevServer(options)
            : undefined,
        optimization: {
            usedExports: true, // позначає невикористані експорти
            innerGraph: true,  // аналізує використання змінних/функцій всередині модуля
            minimize: true,    // вмикає TerserPlugin
            // додаткові налаштування для агресивного видалення
            minimizer: [
              '...', // залишає стандартний TerserPlugin
            ]
        }
    };

    return config;
};
