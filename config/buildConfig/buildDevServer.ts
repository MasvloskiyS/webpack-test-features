import { IBuildOptions } from "./types"

export const buildDevServer = (options: IBuildOptions) => {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
        client: {
            overlay: {
                errors: false,
                warnings: false,
            },
        },
    }
}