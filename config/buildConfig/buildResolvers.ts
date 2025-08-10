
import { IBuildOptions, IEnvVariables } from './types';
import { Configuration } from 'webpack';

export const buildResolvers = (options: IBuildOptions): Configuration['resolve'] => {
    return {
        extensions: ['.tsx', '.ts', '.js', '.scss'],
        alias: {
            '@': options.paths.src
        }
    }
}