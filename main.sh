#!/bin/bash

# Pruebas E2E de la version 3.42.6 de ghost

npm run dsetup -- -g '3.42.6' -m '5.7.40' -p '8081'
echo 'Va a esperar 75 segundos, para asegurar que ghost y mysql esten corriendo'
sleep 75
npm run test:e2e:cypress -- --env GHOST_VERSION='3.42.6',GHOST_PORT='8081'
npm run test:e2e:puppeteer -- '3.42.6' '8081'
npm run test:e2e:playwright -- -g '3.42.6' -p '8081'
npm run dteardown -- -g '3.42.6' -m '5.7.40'

# Cambiar la ubicación de los screenshots
npm run retrieve:screenshots -- -g '3.42.6'

# Pruebas E2E de la version 5.22.9 de ghost

npm run dsetup -- -g '5.22.9' -m '8.0.31' -p '8082'
echo 'Va a esperar 75 segundos, para asegurar que ghost y mysql esten corriendo'
sleep 75
npm run test:e2e:cypress -- --env GHOST_VERSION='5.22.9',GHOST_PORT='8082'
npm run test:e2e:puppeteer -- '5.22.9' '8082'
npm run test:e2e:playwright -- -g '5.22.9' -p '8082'
npm run dteardown -- -g '5.22.9' -m '8.0.31'

# Cambiar la ubicación de los screenshots
npm run retrieve:screenshots -- -g '5.22.9'