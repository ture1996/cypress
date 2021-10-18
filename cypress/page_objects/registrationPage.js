export default class RegistrationPage {
    get emailField(){
        return cy.get(':nth-child(1) > .el-form-item__content > .el-input > .el-input__inner');
    }
    get passwordField(){
        return cy.get('[type="password"]');
    }
    get numberOfUsersField(){
        return cy.get('input[name="number_of_users"]');
    }
    get checkbox(){
        return cy.get('.vs-c-checkbox-check');
    }
    get submitButton(){
        return cy.get('.vs-u-text--left > .vs-c-btn');
    }
    get errorMessage(){
        return cy.get('.vs-c-form-item__error-wrapper > .el-form-item__error');
    };
    register(email, password, numberOfUsers){
        this.emailField.clear();
        this.emailField.type(email);
        this.passwordField.clear();
        this.passwordField.type(password);
        this.numberOfUsersField.clear();
        this.numberOfUsersField.type(numberOfUsers);
        //this.checkbox.click();
        this.submitButton.click();
    }
    clearAll(){
        this.emailField.clear();
        this.passwordField.clear();
        this.numberOfUsersField.clear();
        this.checkbox.click();
    }
}

export const registrationPage = new RegistrationPage();