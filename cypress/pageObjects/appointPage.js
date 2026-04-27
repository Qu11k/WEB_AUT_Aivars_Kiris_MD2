import { basePage } from "./basePage";

export class appointPage extends basePage {
    static get url() {
        return '/#appointment';
    }

    static get facility() {
        return cy.get('#combo_facility');
    }

    static get readmissionCheckbox() {
        return cy.get('#chk_hospotal_readmission');
    }

    static get medicareButton() {
        return cy.get('#radio_program_medicare');
    }

    static get visitDateInput() {
        return cy.get('#txt_visit_date');
    }

    static get calendarDays() {
        return cy.get('.datepicker-days .day:not(.old):not(.new)');
    }

    static get commentField() {
        return cy.get('#txt_comment');
    }

    static get bookAppointment() {
        return cy.get('#btn-book-appointment');
    }
}