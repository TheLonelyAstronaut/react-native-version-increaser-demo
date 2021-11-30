import { version as currentVersion } from '../../package.json';
import { setVersionNumber } from './set-version-number';
import { increaseVersionNumber } from './increase-version-number';

const main = async () => {
    const version = increaseVersionNumber(currentVersion);

    await setVersionNumber(version);
}

main().catch(console.error);