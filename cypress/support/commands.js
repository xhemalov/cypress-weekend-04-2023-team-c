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

/**
 * Custom Cypress command to collect the languages supported by the application.
 * NOTE: Modified approach was used, hreflang is the key, lang is the value to avoid duplicated keys
 */
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
