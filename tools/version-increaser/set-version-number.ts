import {FileConfig, osPath} from './config';
import { readFileSync, writeFileSync } from 'fs';

const updatePlatformVersion = async (config: FileConfig, versionNumber: string) => {
    const fileData: Buffer = readFileSync(config.base);

    const buildVersion = versionNumber.substring(0, versionNumber.lastIndexOf('.'));
    const buildNumber = versionNumber.substring(versionNumber.lastIndexOf('.') + 1);

    const updatedFileData = fileData.toString()
        .replace(config.searchPaths.buildVersion, (all, start, found, end) => `${start}${buildVersion}${end}`)
        .replace(config.searchPaths.buildNumber, (all, start, found, end) => `${start}${buildNumber}${end}`);

    writeFileSync(config.base, updatedFileData);
}

export const setVersionNumber = async (versionNumber: string) => {
    updatePlatformVersion(osPath.ios, versionNumber).catch(console.error);
    updatePlatformVersion(osPath.android, versionNumber).catch(console.error);
}