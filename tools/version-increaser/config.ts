import { resolve } from 'path';
import { name } from '../../app.json';

export type SearchPaths = {
    buildVersion: RegExp,
    buildNumber?: RegExp
}

export type BuildInfo = {
    buildVersion: string,
    buildNumber: string
}

export type FileConfig = {
    base: string;
    searchPaths: SearchPaths;
};

export type Platforms = 'ios' | 'android' | 'node';

export const osPath: Record<Platforms, FileConfig> = {
    ios: {
        base: resolve(process.cwd(), `./ios/${name}.xcodeproj/project.pbxproj`),
        searchPaths: {
            buildVersion: /(^\s*MARKETING_VERSION = )(?<buildVersion>.*)(;$)/gm,
            buildNumber: /(^\s*CURRENT_PROJECT_VERSION = )(?<buildNumber>.*)(;$)/gm,
        }
    },
    android: {
        base: resolve(process.cwd(), './android/app/build.gradle'),
        searchPaths: {
            buildVersion: /(^\s*versionName ")(?<buildVersion>.*)("$)/gm,
            buildNumber: /(^\s*versionCode )(?<buildNumber>\d*)($)/gm,
        }
    },
    node: {
        base: resolve(process.cwd(), './package.json'),
        searchPaths: {
            buildVersion: /(^\s*"version": ")(?<buildVersion>.*)(")/gm,
        }
    }
}

export const getBuildInfo = (version: string): BuildInfo => {
    return {
        buildVersion: version.substring(0, version.lastIndexOf('.')),
        buildNumber: version.substring(version.lastIndexOf('.') + 1)
    };
}