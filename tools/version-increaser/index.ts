import { setVersionNumber } from './set-version-number';
import { increaseVersionNumber } from './increase-version-number';
import { execute } from './command-line';

const main = async () => {
    const currentVersion = (await execute('git tag --sort=committerdate | tail -1'))
        .replace('\n', '')
        .replace('v', '');

    const version = increaseVersionNumber(currentVersion);

    console.log(`${currentVersion} -> ${version}`);

    await setVersionNumber(version);
    await execute(`git tag v${version} && git push origin --tags`);
    await execute(`gh release create v${version} --title "Release v${version}" --notes ""`);
}

main().catch(console.error);