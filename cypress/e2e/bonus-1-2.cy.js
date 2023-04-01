describe('Bonus task', function() {

  before('Handle cookies + visit page', function() {
    cy.setCookie('__kwc_agreed', 'true')
    cy.visit('/en/country/china/')
  })

  it('Should verify randomly clicked airline link', function() {
    cy.get('[data-test="InterlinkingSection"]:contains(Explore airlines and airports)')
      .find('a')
      .its('length')
      .then((l) => Cypress._.random(0, l - 1))
      .then((p) => {
        cy.get('[data-test="InterlinkingSection"]:contains(Explore airlines and airports)')
          .find('a')
          .eq(p)
          .click()
          .invoke('attr', 'href')
          .then(href => {
            cy.url()
              .should('include', href)
          })
      })
  })
})