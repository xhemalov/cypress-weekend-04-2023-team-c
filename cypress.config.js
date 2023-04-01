const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.kiwi.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      hideXhr: true,
    },
  },
})
