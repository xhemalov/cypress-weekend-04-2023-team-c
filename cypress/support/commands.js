// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Custom Cypress command to collect the languages supported by the application.
 * This command finds all the link elements with the 'hreflang' attribute and
 * stores their values in an array. Then, it writes the array to a JSON file
 * under the cypress/fixtures directory.
 */
Cypress.Commands.add('collectLanguages', () => {
  // Initialize an array to store the values of 'hreflang' attributes
  const hreflangs = []

  // Get all 'link' elements with the 'hreflang' attribute and iterate through them
  cy.get('link[hreflang]').each($element => {
    // Add the value of the 'hreflang' attribute to the 'hreflangs' array
    hreflangs.push($element.attr('hreflang'))
  })

  // Write the 'hreflangs' array to a JSON file in the cypress/fixtures directory
  cy.writeFile('cypress/fixtures/hreflangs.json', hreflangs)
})

Cypress.Commands.add('BONUScollectLanguages', () => {
  // Initialize an array to store the values of 'hreflang' attributes
  const hreflangs = {}

  // Get all 'link' elements with the 'hreflang' attribute and iterate through them
  cy.get('link[hreflang]').each($element => {
    // Add the value of the 'hreflang' attribute to the 'hreflangs' array
    hreflangs[$element.attr('hreflang')] = $element.attr('href')
  })

  // Write the 'hreflangs' array to a JSON file in the cypress/fixtures directory
  cy.writeFile('cypress/fixtures/hreflangs_bonus.json', hreflangs)
})

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})
