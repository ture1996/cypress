/// < reference types="Cypress" />

describe('login tests', () => {
    it('visit gallery page', () => {
        cy.visit("login");
    });

    it('click login button', () => {
        cy.get('a[href="/login"]').click();
    });
    it('login with valid data', () => {
        cy.get('input[id="email"]').type('y@y.y');
        cy.get('input[id="password"]').type('11111111');
        cy.get('button[type="submit"]').click();
    });
    it('click logout button', () => {
        cy.wait(3000);
        cy.get('a[class="nav-link nav-buttons"]').eq(2).click();
    });
})