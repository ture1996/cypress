/// < reference types="Cypress" />

import { registrationPage } from './../page_objects/registrationPage';
import { homePage } from './../page_objects/homePage';
import { logout } from './../page_objects/logout';
const faker = require('faker');

describe('scrum register', () => {

    let userData = {
        email: faker.internet.email(),
        password: faker.internet.password(),
        numberOfUsers: Math.floor(Math.random()*9)+1
    };

    it("visit link", () => {
        cy.visit('/');
        cy.url().should('contains', 'https://cypress.vivifyscrum-stage.com/');
    });
    it('invalid email(without @)', () => {
        homePage.goToRegistrationPage();
        registrationPage.register('ture1996gmail.com', userData.password, userData.numberOfUsers);
        registrationPage.errorMessage.should('have.text', 'The email field must be a valid email');
    });
    it('invalid email (without .)', () => {
        registrationPage.register('ture1996@gmailcom', userData.password, userData.numberOfUsers);
        registrationPage.errorMessage.should('have.text', 'The email field must be a valid email');
    });
    it('all empty fields', () => {
        registrationPage.clearAll();
        registrationPage.errorMessage.should('have.text', 'The email field must be a valid emailThe password field is requiredThe number of users field is requiredThe agree to terms and privacy policy field is required');
    });
    it('valid credentials', () => {
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/register",
            ).as("validRegistration");
        registrationPage.checkbox.click();
        registrationPage.register(userData.email,userData.password,userData.numberOfUsers);
        cy.wait('@validRegistration').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(200);
        });
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/logout",
            ).as("logout");
        logout.logout();
        cy.wait('@logout').then((interception) => {
            console.log(interception.response);
            expect(interception.response.statusCode).eq(201);
        });
    });
})