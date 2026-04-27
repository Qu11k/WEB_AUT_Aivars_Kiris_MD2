import { basePage } from "./basePage";

export class mainPage extends basePage {
  static get url() {
    return "/#/";
  }
  static get makeAppointment() {
    return cy.get('#btn-make-appointment')
  }
  static get menuToggle() {
    return cy.get('#menu-toggle');
  }

  static get sidebar() {
    return cy.get('#sidebar-wrapper');
  }
  static get historyLink() {
  return cy.get('.sidebar-nav li a').contains('History');
}
  static get noAppointmentText(){
    return cy.get('.container p').contains('No appointment.')
  }
}