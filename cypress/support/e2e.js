require('cypress-plugin-xhr-toggle')
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

/**
 * Set up the test environment before each test case.
 */
beforeEach(() => {
  cy.log('visiting baseUrl')
  cy.visit('mx/cheap-flights/london-united-kingdom/istanbul-turkey')
  cy.log('Agreeing to a cookie.')
  cy.setCookie('__kwc_agreed', 'true')
  cy.reload()
})
