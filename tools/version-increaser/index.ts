import { version } from '../../package.json';
import { setVersionNumber } from './set-version-number';

const main = async () => {
    await setVersionNumber(version);
}

main().catch(console.error);