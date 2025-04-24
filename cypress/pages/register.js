import registerLocators from "../pages/locators"
export default class Registration{


    enterUser(Name){
        cy.get(registerLocators.username).type(Name);
    }
    enterPassword(pwd){
        cy.get(registerLocators.password).type(pwd);
    }
    loginbutton(){
        cy.get(registerLocators.continue).click();
    }
}