import { basePage } from "./basePage";

export class loginPage extends basePage{
    static get url(){
        return "/profile.php#login";
    }
    static get loginButton(){
        return cy.get('#btn-login');
    }
    static get username(){
        return cy.get('#txt-username')
    }
     static get password(){
        return cy.get('#txt-password')
    }
}