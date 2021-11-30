import { getBuildInfo } from "./config";

export const increaseVersionNumber = (version: string): string => {
    const { buildVersion, buildNumber } = getBuildInfo(version);

    return `${buildVersion}.${buildNumber + 1}`;
}