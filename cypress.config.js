const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  "reporter": "mochawesome", 
  "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "owerwrite": true,
    "html": true,
    "json": false,
    "timestamp": "mmddyyy_HHMMss",
    "charts": true,
    "code": true,
    "reportTitle": "Alura: Automação e2e com Cypress"


  }

});




