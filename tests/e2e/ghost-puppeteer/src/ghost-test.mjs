import { promises as fsPromises } from 'fs';
import { basename } from 'path';
import { fileURLToPath } from 'url';

export default class GhostTest {
    constructor(hostVersion, ghostPort, scriptName) {
        this.ghostVersion = hostVersion;
        this.ghostPort = ghostPort;
        this.scriptName = scriptName;
    }

    async createDir() {
        const dir1 = `screenshots/${this.scriptName}/`;
        try {
            await fsPromises.access(dir1);
        } catch (e) {
            await fsPromises.mkdir(dir1);
        }

        const dir2 = `screenshots/${this.scriptName}/${this.ghostVersion}/`;
        try {
            await fsPromises.access(dir2);
        } catch (e) {
            await fsPromises.mkdir(dir2);
        }
    }

    async testedFunctionality() {
        console.info('Implementar metodo abstracto.');
    }
}
