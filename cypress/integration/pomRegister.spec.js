/// < reference types="Cypress" />

import { registerPage } from './../page_objects/registerPage';
const faker = require('faker');

describe('pomRegister', () => {

    let userData = {
        randomFirstName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomPasswordConfirmation: faker.internet.password()
    };

    beforeEach("visit link", () => {
        cy.visit('/');
        cy.url().should('contains', 'https://gallery-app');
    });

    // it('successfull register', () => {
    //     registerPage.register(userData.randomFirstName,userData.randomLastName,userData.randomEmail,userData.randomPassword,userData.randomPassword);
    // })

    it('bad password confirmation', () => {
        registerPage.register(userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword, userData.randomPasswordConfirmation);
        registerPage.errorMessage.should('be.visible');
        registerPage.errorMessage.should('have.css', 'background-color', 'rgb(248, 215, 218)');
        registerPage.errorMessage.should('have.text', 'The password confirmation does not match.');
    })


})