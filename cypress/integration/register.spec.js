/// < reference types="Cypress" />

describe('registration tests', () => {
    it('visit gallery page', () => {
        cy.visit("register");
    });
    // it('registration form test', () => {
    //     cy.get('input[id="first-name"]').type('Jovo');
    //     cy.get('input[id="last-name"]').type('Turanjanin');
    //     cy.get('input[id="email"]').type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
    //     cy.get('input[id="password"]').type('11111111');
    //     cy.get('input[id="password-confirmation"]').type('11111111');
    //     cy.get('input[type="checkbox"]').check();
    //     cy.get('button[type="submit"]').click();
    // });
    it('email missing @', () => {
        cy.get('input[id="first-name"]').clear().type('Jovo');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'v.h');
        cy.get('input[id="password"]').clear().type('11111111');
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('email missing .', () => {
        cy.get('input[id="first-name"]').clear().type('Jovo');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@vh');
        cy.get('input[id="password"]').clear().type('11111111');
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('password with 7 char', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
        cy.get('input[id="password"]').clear().type('1111111');
        cy.get('input[id="password-confirmation"]').clear().type('1111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('wrong comfirmation ', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
        cy.get('input[id="password"]').clear().type('11111112');
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('existing user', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m@v.h');
        cy.get('input[id="password"]').clear().type('11111111');
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('unchecked box', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
        cy.get('input[id="password"]').clear().type('11111111');
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').click();
        cy.get('button[type="submit"]').click();
    });
    it('without first name', () => {
        cy.get('input[id="first-name"]').clear();
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
        cy.get('input[id="password"]').clear().type('11111111');
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('without last name', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear();
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
        cy.get('input[id="password"]').clear().type('11111111');
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('without email', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear();
        cy.get('input[id="password"]').clear().type('11111111');
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('without password', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
        cy.get('input[id="password"]').clear();
        cy.get('input[id="password-confirmation"]').clear().type('11111111');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('without confirmation', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
        cy.get('input[id="password"]').clear().type('11111111');
        cy.get('input[id="password-confirmation"]').clear();
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('password without numbers', () => {
        cy.get('input[id="first-name"]').clear().type('J');
        cy.get('input[id="last-name"]').clear().type('Turanjanin');
        cy.get('input[id="email"]').clear().type('m'+ Math.floor(Math.random() * 1000000)+'@v.h');
        cy.get('input[id="password"]').clear().type('abcdefgh');
        cy.get('input[id="password-confirmation"]').type('abcdefgh');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
});