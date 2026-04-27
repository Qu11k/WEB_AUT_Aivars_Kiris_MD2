import { basePage } from "./basePage";

  export class mainPage extends basePage {
  static get url() {
    return "/#/";
  }
  static get makeAppointment(){
    return cy.get('#btn-make-appointment')
  }
}