import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildPaths, IEnvVariables } from './config/buildConfig/types';
import { buildWebpack } from './config/buildConfig/buildConfig';
import path from 'path';



export default (env: IEnvVariables): webpack.Configuration => {
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html' ),
        output: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src')
    }
    return buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })
}
