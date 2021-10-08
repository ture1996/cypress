/// < reference types="Cypress" />

const locators = require("../fixtures/locators.json");
const faker = require('faker');

describe('improved login', () => {
    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.random.number()*10000000
    }
    let correctEmail = 'y@y.y';
    let correctPassword = '11111111';

    beforeEach("visit link", () => {
        cy.visit('/');
        cy.url().should('contains', 'https://gallery-app');
    })
    it('login with valid credentials',() => {
        cy.get(locators.Header.loginButton).click();
        cy.get(locators.loginPage.emailField).type(correctEmail);
        cy.get(locators.loginPage.passwordField).type(correctPassword);
        cy.get(locators.loginPage.submitButton).click();
        cy.get(locators.Header.logoutButton).click();
        cy.get(locators.Header.logoutButton).should('not.exist');
    });
    it('login with invalid data', () => {
        cy.get(locators.Header.loginButton).click();
        cy.get(locators.loginPage.emailField).type(userData.randomEmail);
        cy.get(locators.loginPage.passwordField).type(userData.randomPassword);
        cy.get(locators.loginPage.submitButton).click();
    })
});
