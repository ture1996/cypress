/// < reference types="Cypress" />

const locators = require("../fixtures/locators.json");
const faker = require('faker');

describe('improved register',() => {
    let userData = {
        randomName: faker.name.firstName(),
        randomSurname: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.random.number()*10000000
    }

    // let correctFirstName = 'Jovo';
    // let correctLastName = 'Turanjanin';
    // let correctEmail = 'ghi'+ Math.floor(Math.random() * 1000000000) +'@gm.f';
    // let correctPassword = '11111111';

    beforeEach('visit link', () => {
        cy.visit('/');
        cy.url().should('contains', 'https://gallery-app');
    });
    it('register with valid credentials', () => {
        cy.get(locators.Header.registerButton).click();
        cy.url().should('contains', 'https://gallery-app.vivifyideas.com/register');
        cy.get(locators.registerPage.firstNameField).type(userData.randomName);
        cy.get(locators.registerPage.lastNameField).type(userData.randomSurname);
        cy.get(locators.registerPage.emailField).type(userData.randomEmail);
        cy.get(locators.registerPage.passwordField).type(userData.randomPassword);
        cy.get(locators.registerPage.passwordConfirmationField).type(userData.randomPassword);
        cy.get(locators.registerPage.termsCheckbox).check();
        cy.get(locators.registerPage.submitButton).click();
    })
})