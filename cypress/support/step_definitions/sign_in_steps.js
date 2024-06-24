import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignInPage from '../page_objects/signInPage';

const signInPage = new SignInPage();

Given('I am on the Sign-In page', () => {
  cy.wait(1000);
  signInPage.visit();
  cy.wait(1000);
});

When('I enter the email {string} into the email field', (email) => {
  signInPage.fillEmail(email);
});

When('I enter the password {string} into the password field', (password) => {
  signInPage.fillPassword(password);
});

When('I click the sign in button', () => {
  signInPage.submit();
});

Then('I should be redirected to the home page', () => {
  cy.url().should('eq', Cypress.config().baseUrl);
});
