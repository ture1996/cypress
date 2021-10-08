export default class LoginPage{
    get submitButton(){
        return cy.get('button[type="submit"]');
    }
    get emailInput(){
        return cy.get('#email');
    };
    get passwordInput(){
        return cy.get('#password');
    };
    get loginButton (){
        return cy.get('a[href="/login"]');
    }
    get logoutButton(){
        return cy.get('a[role="button "]');
    }


    login(email, password){
        this.loginButton.click();
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitButton.click();
    }

}

export const loginPage = new LoginPage();