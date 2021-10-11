/// < reference types="Cypress" />

const locators = require("../fixtures/locators.json");
import { loginPage } from './../page_objects/loginPage';
const faker = require('faker');

describe('improved login', () => {
    let userData = {
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }
    let correctEmail = 'y@y.y';
    let correctPassword = '11111111';

    beforeEach("visit link", () => {
        cy.visit('/');
        cy.url().should('contains', 'https://gallery-app');
    });


    it('login with valid credentials', () => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/login",
            ).as("validLogin");
        loginPage.login(correctEmail, correctPassword);
        cy.wait('@validLogin').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(200);
        });

        loginPage.logoutButton.should('be.visible');
    });
    it('logout', () => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/logout",
            ).as("logout");
        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.should('be.visible');
        loginPage.logoutButton.click();
        cy.wait('@logout').then((interception) => {expect(interception.response.body.message).eq('Successfully logged out');
        expect(interception.response.statusCode).eq(200);
    })
    });
    it('login with invalid data', () => {
        loginPage.login(userData.randomEmail, userData.randomPassword);
        loginPage.errorMessage.should('be.visible');
        loginPage.errorMessage.should('have.css', 'background-color', 'rgb(248, 215, 218)');
        loginPage.errorMessage.should('have.text', 'Bad Credentials');
    });
});