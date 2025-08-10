import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { IBuildOptions } from './types';
import { ModuleOptions } from 'webpack';

export const buildLoaders = (options: IBuildOptions): ModuleOptions['rules'] => {
    const isDev = options.mode === 'development';

    const postCssLoader = {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                    'autoprefixer',
                ],
            },
        },
    }

    const cssLoader = {
        loader: 'css-loader',
        options: {
            esModule: false, 
            importLoaders: 2,
            modules: {
                localIdentName: '[local]__[hash:base64:5]',
            }
        },
    }

    const getStyleLoaders = () => {
        return [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoader,
            postCssLoader,
            'sass-loader',
        ];
    };

    return [
        {
            test: /\.tsx?$/,
            use: [{
                loader: 'ts-loader',
                options: {
                  getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                  }),
                  transpileOnly: isDev,
                },
              },],
        },
        {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.svg$/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
              },
            ],
          },
        {
            test: /\.s[ac]ss$/i,
            use: getStyleLoaders(),
        },
    ]
}