/// < reference types="Cypress" />

import { loginPage } from './../page_objects/loginPage';

describe('create gallery', () => {
    beforeEach('log into the app', () => {
        cy.loginViaBackend(Cypress.env('validEmail'), Cypress.env('validPassword'));
        cy.visit('/create');
        loginPage.logoutButton.should('be.visible');
    });

    it('visit default url', () => {
        cy.visit('/create');
        loginPage.logoutButton.should('be.visible');
    });


});