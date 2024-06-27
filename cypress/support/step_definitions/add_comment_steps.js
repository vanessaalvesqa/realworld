import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommentPage from '../page_objects/commentPage';
import SignInPage from '../page_objects/signInPage';
import HomePage from '../page_objects/homePage';

const commentPage = new CommentPage();
const signInPage = new SignInPage();
const homePage = new HomePage();

Given('I am logged in', () => {
  signInPage.visit();
  signInPage.fillEmail('testqaengineer2@test.com');
  signInPage.fillPassword('Test@123');
  signInPage.submit();
  cy.url({ timeout: 10000 }).should('not.include', '/login');
});

When('I am on the home page', () => {
  homePage.visit();
  cy.url({ timeout: 10000 }).should('include', '/');
  cy.get('.preview-link', { timeout: 10000 }).should('be.visible');
});

When('I select any article', () => {
  homePage.selectFirstArticle();
  cy.url({ timeout: 10000 }).should('include', '/#/articles/');
});

When('I enter {string} into the comment input field', (comment) => {
  cy.wait(2000);
  commentPage.addComment(comment);
});

Then('I should see {string} under the article', (comment) => {
  cy.contains('.card-text', comment, { timeout: 10000 }).should('be.visible');
});


Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
  return false;
});