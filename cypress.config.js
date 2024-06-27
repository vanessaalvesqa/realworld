const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vue-vuex-realworld.netlify.app/#/',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());

      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    video: true,
    supportFile: false,
    
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
  }
});
