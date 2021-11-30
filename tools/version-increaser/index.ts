import { version as currentVersion } from '../../package.json';
import { setVersionNumber } from './set-version-number';
import { increaseVersionNumber } from './increase-version-number';
import { execute } from './command-line';

const main = async () => {
    const version = increaseVersionNumber(currentVersion);

    await setVersionNumber(version);
    await execute(`git tag v${version} && git push origin --tags`);
    await execute(`gh release create v${version} --title "Release v${version}" --notes ""`)
}

main().catch(console.error);