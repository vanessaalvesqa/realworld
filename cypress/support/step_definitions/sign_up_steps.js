import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignUpPage from '../page_objects/signUpPage';

const signUpPage = new SignUpPage();
let user;

Given('I am on the Sign-Up page', () => {
  cy.wait(1000);
  signUpPage.visit();
  cy.wait(1000);
});

When('I enter a random user into the fields', () => {
  user = signUpPage.generateFakeUser();
  signUpPage.fillUsername(user.username);
  signUpPage.fillEmail(user.email);
  signUpPage.fillPassword(user.password);
});

When('I click the sign up button', () => {
  signUpPage.submit();
});

Then('I should be redirected to the home page', () => {
  cy.url().should('eq', Cypress.config().baseUrl);
});

Then('I should see my username displayed', () => {
  cy.contains(user.username, { timeout: 10000 }).should('be.visible');
});
