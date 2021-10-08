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
        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.should('be.visible');
    });
    it('logout', ()=>{
        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.should('be.visible');
        loginPage.logoutButton.click();
    });
    it('login with invalid data', () => {
        loginPage.login(userData.randomEmail, userData.randomPassword);
    });
});