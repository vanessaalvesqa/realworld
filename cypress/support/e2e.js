// cypress/support/e2e.js
// Import commands.js using ES2015 syntax:
import 'cypress-mochawesome-reporter/register';
require('./commands');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  