/// <reference types="cypress" />
import { basename } from 'path';

const ghostVersion = Cypress.env('GHOST_VERSION');
const ghostPort = Cypress.env('GHOST_PORT');

describe('Testing basic Angular registration', () => {
    beforeEach(() => {
        cy.visit(
            'https://angular-6-registration-login-example.stackblitz.io/register'
        );
        cy.wait(7000);
        cy.get('button').click();
    });

    it('Test links between registration and login page', () => {
        cy.screenshot(`${ghostVersion}/pagina`);
        cy.get('a.btn.btn-link').click();
        cy.url().should(
            'eq',
            'https://angular-6-registration-login-example.stackblitz.io/login'
        );
        cy.screenshot(`${ghostVersion}/pagina2`);
        cy.get('a.btn.btn-link').click();
        cy.url().should(
            'eq',
            'https://angular-6-registration-login-example.stackblitz.io/register'
        );
    });
    it('Test form feedback', () => {
        cy.get('button.btn.btn-primary').click();
        cy.wait(1000);
        cy.get('div.invalid-feedback').then(($divs) => {
            expect($divs.length).to.equal(4);
        });
        cy.screenshot(`${ghostVersion}/form-feedback`);
    });
    it('Create an user and login', () => {
        cy.get('form').within(() => {
            cy.get('input[formcontrolname="firstName"]').type('Monitor');
            cy.get('input[formcontrolname="lastName"]').type('Pruebas');
            cy.get('input[formcontrolname="username"]').type('pruebas');
            cy.get('input[formcontrolname="password"]').type('MISO4208');
            cy.get('button.btn.btn-primary').click();
        });
        cy.wait(1000);
        cy.screenshot(`${ghostVersion}/success-feedback`);
        //Redirected to login
        cy.get('div.alert.alert-success').should('be.visible');
        cy.get('form').within(() => {
            cy.get('input[formcontrolname="username"]').type('pruebas');
            cy.get('input[formcontrolname="password"]').type('MISO4208');
            cy.get('button.btn.btn-primary').click();
        });
        cy.wait(1000);
        //logged in
        cy.get('h1').then(($header) => {
            expect($header[0].innerText).to.equal('Hi Monitor!');
        });
        cy.screenshot(`${ghostVersion}/after-login`);
    });
});
