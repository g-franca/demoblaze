const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://www.demoblaze.com/index.html',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
