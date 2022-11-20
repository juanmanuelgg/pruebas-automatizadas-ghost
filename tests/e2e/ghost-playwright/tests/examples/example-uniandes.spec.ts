//Importar Playwright
import { expect } from '@playwright/test';
import { basename } from 'path';
import { test } from '../../ghost-test';

const scriptName = basename(__filename);

//Función flecha asíncrona
test('homepage has title and links to intro page', async ({
    page,
    ghostVersion,
    ghostPort
}) => {
    //Abrir la URL a probar en la página y cargar el proyecto en una SPA
    await page.goto(
        'https://angular-6-registration-login-example.stackblitz.io/register'
    );
    await new Promise((r) => setTimeout(r, 2000));
    await page.screenshot({
        path: `screenshots/${scriptName}/${ghostVersion}/pagina.png`
    });
    await page.click('css=button');
    await new Promise((r) => setTimeout(r, 2000));
    await page.screenshot({
        path: `screenshots/${scriptName}/${ghostVersion}/pagina2.png`
    });
    console.log('Project loaded');

    //Interactuar con la aplicación web
    await page.click('css=a.btn.btn-link');
    console.log(`Clicked "cancel". URL is now ${page.url()}`);

    await page.click('css=a.btn.btn-link');
    console.log(`Clicked "register". URL is now ${page.url()}`);

    await page.click('css=button.btn.btn-primary');
    let feedback = await page.$$('css=div.invalid-feedback');

    let elems = 0;
    for (let i of feedback) {
        elems++;
    }
    await page.screenshot({
        path: `screenshots/${scriptName}/${ghostVersion}/form-feedback.png`
    });
    console.log(
        `Clicked "Register" with an empty form. Feedback is shown in ${elems} elements`
    );

    await page.type('input[formcontrolname="firstName"]', 'Monitor');
    await page.type('input[formcontrolname="lastName"]', 'Pruebas');
    await page.type('input[formcontrolname="username"]', 'pruebas');
    await page.type('input[formcontrolname="password"]', 'MISO4208');
    await page.click('css=button.btn.btn-primary');

    await new Promise((r) => setTimeout(r, 2000));
    await page.screenshot({
        path: `screenshots/${scriptName}/${ghostVersion}/success-feedback.png`
    });

    let feedback2 = await page.$('css=div.alert.alert-success');
    console.log(
        `Success dialog after creating user with message: ${
            feedback2 ? await feedback2.innerText() : 'null'
        }`
    );

    await page.type('input[formcontrolname="username"]', 'pruebas');
    await page.type('input[formcontrolname="password"]', 'MISO4208');
    await page.click('css=button.btn.btn-primary');
    await new Promise((r) => setTimeout(r, 2000));

    let feedback3 = await page.$('text="Hi Monitor!"');
    await page.screenshot({
        path: `screenshots/${scriptName}/${ghostVersion}/after-login.png`
    });
    console.log(
        `Logged in. Your user was ${feedback3 ? 'successfully' : 'not'} created`
    );
    //...
});
