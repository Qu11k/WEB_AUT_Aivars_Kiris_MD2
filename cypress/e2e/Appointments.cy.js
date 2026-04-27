import { basePage } from '../pageObjects/basePage'
import { mainPage } from '../pageObjects/mainPage'
import {loginPage} from '../pageObjects/loginPage'
import {appointPage} from '../pageObjects/appointPage'

describe('CURA Tests', () => {

  it('Scenario 1 - Make Appointment', () => {
//login
    mainPage.visit()

    mainPage.makeAppointment.click()

    loginPage.username.type('John Doe')
    loginPage.password.type('ThisIsNotAPassword')
    loginPage.loginButton.click()
//appointment
    appointPage.facility.select('Seoul CURA Healthcare Center')
    appointPage.readmissionCheckbox.check()
    appointPage.medicareButton.check()

    appointPage.visitDateInput.click()
    appointPage.calendarDays.contains('13').click()

    appointPage.commentField.type('Sis ir testa koments')

    appointPage.bookAppointment.click()
//check
    cy.contains('Seoul CURA Healthcare Center')
    cy.contains('Yes')
    cy.contains('Medicare')
    cy.contains('13/04/2026')
    cy.get('#comment').should('contain.text', 'Sis ir testa koments')
// end of sc 1
//======================================================================
  })
  it('Scenario 2 - Clean history', () => {

    mainPage.visit()

    mainPage.makeAppointment.click()

    loginPage.username.type('John Doe')
    loginPage.password.type('ThisIsNotAPassword')
    loginPage.loginButton.click()
//menu
    mainPage.menuToggle.click()
    mainPage.sidebar.should('have.class', 'active')
    mainPage.historyLink.click()
    mainPage.noAppointmentText.should('be.visible')

  })
})