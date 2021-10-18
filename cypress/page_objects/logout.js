export default class Logout{
    get avatarButton(){
        return cy.get('.vs-u-img--round');
    }
    get profileButton(){
        return cy.get('a[href="/account/settings"]');
    }
    get logoutButton(){
        return cy.get('.vs-c-logout > .vs-c-btn');
    };
    logout(){
        this.avatarButton.click();
        this.profileButton.click();
        this.logoutButton.click();
    }
}
export const logout = new Logout();
