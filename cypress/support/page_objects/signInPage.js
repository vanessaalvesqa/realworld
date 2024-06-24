class SignInPage {
  visit() {
    cy.visit('/login');
  }

  fillEmail(email) {
    cy.get('input[placeholder="Email"]').should('be.visible').should('not.be.disabled').type(email);
  }

  fillPassword(password) {
    cy.get('input[placeholder="Password"]').should('be.visible').should('not.be.disabled').type(password);
  }

  submit() {
    cy.get('button.btn.btn-lg.btn-primary.pull-xs-right').should('be.visible').should('not.be.disabled').click();
  }
}

export default SignInPage;
