import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ArticlePage from '../page_objects/articlePage';
import SignInPage from '../page_objects/signInPage';

const articlePage = new ArticlePage();
const signInPage = new SignInPage();

Given('I am logged in', () => {
  cy.wait(1000); 
  signInPage.visit();
  cy.wait(2000);
  signInPage.fillEmail('testqaengineer@test.com');
  signInPage.fillPassword('Test@123');
  signInPage.submit();
  cy.wait(1000);
});

When('I navigate to the New Article page', () => {
  cy.contains('New Article', { timeout: 10000 }).should('be.visible').click();
});

When('I enter {string} into the title field', (title) => {
  articlePage.fillTitle(title);
});

When('I enter {string} into the description field', (description) => {
  cy.get('input[placeholder="What\'s this article about?"]')
    .should('not.be.disabled')
    .then(() => {
      articlePage.fillDescription(description);
    });
});

When('I enter {string} into the body field', (body) => {
  articlePage.fillBody(body);
});

When('I enter {string} into the tags field', (tags) => {
  articlePage.fillTags(tags);
});

When('I click the publish article button', () => {
  articlePage.submit();
});

Then('I should be redirected to the article page', () => {
  cy.url().should('include', '/article');
});

Then('I should see {string} as the title', (title) => {
  cy.contains(title, { timeout: 10000 }).should('be.visible');
});


Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
 
  return false;
});
