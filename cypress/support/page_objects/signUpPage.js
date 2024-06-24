import { faker } from '@faker-js/faker';

class SignUpPage {
  visit() {
    cy.visit('/register');
  }

  fillUsername(username) {
    cy.get('input[placeholder="Username"]').should('be.visible').should('not.be.disabled').type(username);
  }

  fillEmail(email) {
    cy.get('input[placeholder="Email"]').should('be.visible').should('not.be.disabled').type(email);
  }

  fillPassword(password) {
    cy.get('input[placeholder="Password"]').should('be.visible').should('not.be.disabled').type(password);
  }

  submit() {
    cy.get('button.btn.btn-lg.pull-xs-right.btn-primary').should('be.visible').should('not.be.disabled').click();
  }

  generateFakeUser() {
    return {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
}

export default SignUpPage;
