export class basePage {
  static visit() {
    return cy.visit(this.url);
  }
}