import { ExampleUniandes } from './ghost/example-uniandes.mjs';

/**
 * Ejecutor de la suite de pruebas
 * @param {*} ghostVersion La versión de ghost a probar
 * @param {*} ghostPort El puerto por el que esta saliendo ghost
 */
async function main(ghostVersion, ghostPort) {
    const exampleUniandes = new ExampleUniandes(ghostVersion, ghostPort);
    await exampleUniandes.createDir();
    await exampleUniandes.testedFunctionality();
}

const ghostVersion = process.argv[2] || 'latest';
const ghostPort = process.argv[3] || '8080';

main(ghostVersion, ghostPort);
