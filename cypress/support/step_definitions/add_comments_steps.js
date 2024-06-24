import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CommentPage from '../page_objects/commentPage';
import SignInPage from '../page_objects/signInPage';
import ArticlePage from '../page_objects/articlePage';

const commentPage = new CommentPage();
const signInPage = new SignInPage();
const articlePage = new ArticlePage();

Given('I am logged in', () => {
  cy.wait(1000);
  signInPage.visit();
  signInPage.fillEmail('testqaengineer@test.com');
  signInPage.fillPassword('Test@123');
  signInPage.submit();
  cy.wait(1000);
});

Given('I am on the article page for {string}', (title) => {
  articlePage.visit();
  cy.contains(title).click();
  cy.contains(title).should('be.visible');
  articlePage.visit();
  cy.contains(title).click().should('be.visible');
});

When('I enter {string} into the comment input field', (comment) => {
  commentPage.addComment(comment);
});

Then('I should see {string} under the article', (comment) => {
  cy.contains(comment).should('be.visible');
});


Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
  
  return false;
});
