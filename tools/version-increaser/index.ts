import { setVersionNumber } from './set-version-number';
import {createNewRelease} from "./create-new-release";

const main = async () => {
    const version = await createNewRelease();

    await setVersionNumber(version);
}

main().catch(console.error);