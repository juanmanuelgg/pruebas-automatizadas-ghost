import { promises as fsPromises } from 'fs';
import { basename } from 'path';
import { fileURLToPath } from 'url';

export default class GhostTest {
    constructor(hostVersion, ghostPort) {
        this.ghostVersion = hostVersion;
        this.ghostPort = ghostPort;
        const __filename = fileURLToPath(import.meta.url);
        this.scriptName = basename(__filename, '.mjs');
    }

    async createDir() {
        const dir = `../screenshots/${this.scriptName}/${this.ghostVersion}/`;
        try {
            await fsPromises.access(dir);
        } catch (e) {
            await fsPromises.mkdir(dir);
        }
    }

    async testedFunctionality() {
        console.info('Implementar metodo abstracto.');
    }
}
