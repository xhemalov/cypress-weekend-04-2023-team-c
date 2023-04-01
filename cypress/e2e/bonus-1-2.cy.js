const sectionText = 'Explore airlines and airports'

describe('Bonus task', function() {

  before('Handle cookies + visit page', function() {
    cy.setCookie('__kwc_agreed', 'true')
    cy.visit('/en/country/china/')
  })

  it('Should verify randomly clicked airline link', function() {
    cy.get(`[data-test="InterlinkingSection"]:contains(${sectionText})`)
      .find('a')
      .its('length')
      .then((length) => Cypress._.random(0, length - 1))
      .then((randomIndex) => {
        cy.get(`[data-test="InterlinkingSection"]:contains(${sectionText})`)
          .find('a')
          .eq(randomIndex)
          .click()
          .invoke('attr', 'href')
          .then(href => {
            cy.url()
              .should('include', href)
          })
      })
  })
})