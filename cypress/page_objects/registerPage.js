export default class RegisterPage{
    get submitButton(){
        return cy.get('button[type="submit"]');
    }
    get firstNameInput(){
        return cy.get('#first-name');
    }
    get lastNameInput(){
        return cy.get('#last-name');
    }
    get emailInput(){
        return cy.get('#email');
    }
    get passwordInput(){
        return cy.get('#password');
    }
    get passwordConfirmationInput(){
        return cy.get('#password-confirmation');
    }
    get checkbox(){
        return cy.get('.form-check-input');
    }
    get registerButton(){
        return cy.get('a[href="/register"]');
    }
    get logoutButton(){
        return cy.get('a[role="button "]');
    }
    get errorMessage(){
        return cy.get('.alert');
    }
    register(firstName, lastName, email, password, passwordConfirmation){
        this.registerButton.click();
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.passwordConfirmationInput.type(passwordConfirmation);
        this.checkbox.check();
        this.submitButton.click();
    }
}

export const registerPage = new RegisterPage();