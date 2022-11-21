/// <reference types="cypress" />

const ghostVersion = Cypress.env('GHOST_VERSION');
const ghostPort = Cypress.env('GHOST_PORT');

describe('Crear un post', () => {
    it('Accede a la paguina de creación de posts', () => {
        cy.visit(`http://localhost:${ghostPort}/ghost/#/editor/post`);
        cy.wait(3000);
        cy.screenshot(`${ghostVersion}/01-PaginaIntacta`);
    });
});
