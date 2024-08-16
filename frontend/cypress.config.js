const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:3000',
    watchForFileChanges: true,
    defaultCommandTimeout: 4000, 
    responseTimeout: 15000, 
    video: true,
    screenshotOnRunFailure: false, 
    retries: 1,
  },
  component: {
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/component.{js,jsx,ts,tsx}',
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    }
  }
});
