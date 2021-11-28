import { osPath } from './config';
import { readFileSync, writeFileSync } from 'fs';

const updatePlatformVersion = async (sourceFilePath: string, versionNumber: string) => {
    const fileData: Buffer = readFileSync(sourceFilePath);

    const updatedFileData = fileData.toString()
        .replace(searchPattern.buildNumber, (all, start, found, end) => `${start}${newBuildNumber}${end}`);

    writeFileSync(sourceFilePath, updatedFileData);
}

export const setVersionNumber = async (versionNumber: string) => {
    updatePlatformVersion(osPath.ios.base, versionNumber).catch(console.error);
    updatePlatformVersion(osPath.android.base, versionNumber).catch(console.error);
}