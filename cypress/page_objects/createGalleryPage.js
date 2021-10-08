export default class CreateGallery{
    get titleField(){
        return cy.get('#title');
    }
    get descriptionField(){
        return cy.get('#description');
    }
    get urlField(){
        return cy.get('.form-control');
    }
    get upButton(){
        return cy.get('.input-buttons').eq(1);
    };
    get downButton(){
        return cy.get('.input-buttons').eq(2);
    }
    get trashButton(){
        return cy.get('.input-buttons').eq(0);
    }
}