import { FileConfig, getBuildInfo, osPath } from './config';
import { readFileSync, writeFileSync } from 'fs';

const updatePlatformVersion = async (config: FileConfig, versionNumber: string) => {
    const fileData: Buffer = readFileSync(config.base);

    if(config.searchPaths.buildNumber) {
        const { buildVersion, buildNumber } = getBuildInfo(versionNumber);

        const updatedFileData = fileData.toString()
            .replace(config.searchPaths.buildVersion, (all, start, found, end) => `${start}${buildVersion}${end}`)
            .replace(config.searchPaths.buildNumber, (all, start, found, end) => `${start}${buildNumber}${end}`);

        writeFileSync(config.base, updatedFileData);
    } else {
        const updatedFileData = fileData.toString()
            .replace(config.searchPaths.buildVersion, (all, start, found, end) => `${start}${versionNumber}${end}`)

        writeFileSync(config.base, updatedFileData);
    }
}

export const setVersionNumber = async (versionNumber: string) => {
    updatePlatformVersion(osPath.ios, versionNumber).catch(console.error);
    updatePlatformVersion(osPath.android, versionNumber).catch(console.error);
    updatePlatformVersion(osPath.node, versionNumber).catch(console.error);
}