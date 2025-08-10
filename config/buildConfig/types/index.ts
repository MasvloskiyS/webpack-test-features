export type TBuildMode = 'development' | 'production';

export interface IEnvVariables {
    mode: TBuildMode;
    port: number;
    analyzer?: boolean
    platform?: 'mobile' | 'desktop'
}

export interface IBuildPaths {
    entry: string
    html: string
    output: string
    src: string
}

export interface IBuildOptions {
    port: number
    paths: IBuildPaths
    mode: TBuildMode
    analyzer?: boolean
    platform?: 'mobile' | 'desktop'
}