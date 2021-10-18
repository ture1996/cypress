export default class HomePage {
    get signUpButton(){
        return cy.get('.vs-c-auth-modal__bottom > .vs-u-font-bold');
    }
    get freeTrialButton(){
        return cy.get('a[title="Starter"]').eq(0);
    }
    goToRegistrationPage(){
        this.signUpButton.click();
        this.freeTrialButton.click({force: true});
    }
};
export const homePage = new HomePage();