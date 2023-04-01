Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-test=${selector}]`, ...args)
})
