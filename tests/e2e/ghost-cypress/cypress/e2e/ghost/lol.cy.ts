/// <reference types="cypress" />
import { basename } from 'path';

const scriptName = basename(__filename, '.cy.ts');

const ghostVersion = Cypress.env('GHOST_VERSION');
const ghostPort = Cypress.env('GHOST_PORT');

// Basado en: https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/logging-in__jwt/cypress/integration/using-ui-spec.js
describe('Test página de Login', () => {
    it('No accede a recursos protegidos', () => {
        cy.visit(`http://localhost:${ghostPort}/`);
        cy.screenshot(`${scriptName}/${ghostVersion}`);
        // cy.location('pathname').should('equal', '/signinside');
    });

    /*
    it('No accede a recursos protegidos', () => {
        cy.visit('/console/configuration/listTermsConditions');
        cy.location('pathname').should('equal', '/signinside');
    });

    it('No Entra cuando el Login es incorrecto (password mal)', () => {
        cy.location('pathname').should('equal', '/');

        cy.get('#remember').click();
        cy.get('#email').type(Cypress.env('users').test);
        // Aqui se prueba con enter
        cy.get('#passwordLogin').type('NotThePassword{enter}');

        // Sigue en la página y se debe ver un mensaje de error
        cy.location('pathname').should('equal', '/');
        cy.getByTestSelector('viewalert')
            .should('be.visible')
            .and('have.text', 'No se pudo hacer login.');
        cy.screenshot();
    });

    it('No Entra cuando el Login es incorrecto (todo mal)', () => {
        cy.location('pathname').should('equal', '/');

        cy.get('#remember').click();
        cy.get('#email').type('notauser@mustnotwork.err');
        // Aqui se prueba con enter
        cy.get('#passwordLogin').type('NotThePassword{enter}');

        // Sigue en la página y se debe ver un mensaje de error
        cy.location('pathname').should('equal', '/');
        cy.getByTestSelector('viewalert')
            .should('be.visible')
            .and('have.text', 'No se pudo hacer login.');
        cy.screenshot();
    });

    it('Hace login', () => {
        cy.location('pathname').should('equal', '/');

        // Login
        cy.get('#remember').click();
        cy.get('#email').type(Cypress.env('users').test);
        cy.get('#passwordLogin').type(Cypress.env('password'));
        // Aqui se prueba con el boton
        cy.get('button[type=submit]').click();

        cy.getByTestSelector('viewalert')
            .should('be.visible')
            .and('have.text', '¡Login Exitoso! ... Redireccionando.');
        cy.screenshot();

        cy.location('pathname').should('equal', '/console/home');
        cy.screenshot();

        return cy
            .window()
            .its('localStorage')
            .invoke('getItem', 'acccuser')
            .then((acccuser) => {
                // Mientras se encuentra una mejor solucion, aqui es Chai.LanguageChains
                expect(acccuser).to.be.a('string');
                const user = JSON.parse(acccuser);
                expect(user).to.be.an('object');
                expect(user).to.have.keys([
                    'email',
                    'iduser',
                    'image',
                    'last',
                    'name'
                ]);
            });
    });

    it('Hace logout', () => {
        cy.login(Cypress.env('users').test, Cypress.env('password'));
        // Logout
        cy.getByTestSelector('menu-profile').click();
        cy.screenshot();
        cy.getByTestSelector('logout-button').click();

        cy.location('pathname').should('equal', '/signinside');
        cy.screenshot();
    });
    */
});
