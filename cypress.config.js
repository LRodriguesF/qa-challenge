const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/index.js',
    specPattern: 'cypress/e2e/**/*.spec.js',
  },
});
