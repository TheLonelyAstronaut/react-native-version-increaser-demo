import { resolve } from 'path';
import { existsSync } from 'fs';
import { name } from '../../app.json';

export type SearchPaths = {
    buildVersion: RegExp,
    buildNumber: RegExp
}

export type FileConfig = {
    base: string;
    searchPaths: SearchPaths;
};

export type Platforms = 'ios' | 'android';

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
    }
}