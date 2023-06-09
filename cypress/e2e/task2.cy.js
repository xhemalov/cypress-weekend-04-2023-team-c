describe('task2', () => {
  /**
   * Set up the test environment before each test case.
   */
  beforeEach(() => {
    cy.log('visiting baseUrl')
    cy.visit('mx/cheap-flights/london-united-kingdom/istanbul-turkey')
    cy.log('Agreeing to a cookie.')
    cy.setCookie('__kwc_agreed', 'true')
  })

  /**
   * This suite tests URL redirects and language validation for a travel website.
   */
  it('Should redirect from unsupported language', () => {
    cy.log('Sending request to tested page.')
    cy.request({
      url: 'mx/cheap-flights/london-united-kingdom/istanbul-turkey',
      followRedirect: false, // Do not follow redirects automatically
    }).then(response => {
      cy.log('Verifying that response is 301.')
      expect(response.status).to.equal(301)
      cy.log('Validating redirected URL.')
      expect(response.headers.location).to.contain(
        'es/cheap-flights/london-united-kingdom/istanbul-turkey',
      )
    })

    cy.log('Verifying that URL was redirected and Spanish phrase is present.')
    cy.url().should('contain', 'es/cheap-flights/london-united-kingdom/istanbul-turkey')
    cy.get('.capitalize').should('contain.text', 'Hacks de viaje')
  })

  /**
   * This test case validates the supported languages in the app.
   */
  it('Should support given languages', () => {
    cy.log('Reading supported languages from fixture file.')
    cy.fixture('hreflangs.json').then(hreflangs => {
      cy.log('Checking languages available in the app.')
      cy.get('link[hreflang]').each(($element, index) => {
        cy.wrap($element).should('have.attr', 'hreflang', hreflangs[index])
      })
    })
  })

  /**
   * This bonus test case validates the supported languages in the app.
   */
  it('Should support given languages BONUS', () => {
    cy.log('Reading supported languages from bonus fixture file.')
    cy.fixture('hreflangs_bonus.json').then(hreflangs => {
      // Convert the hreflangs object into an array of key-value pairs
      const hreflangsArray = Object.entries(hreflangs)

      // Iterate through the key-value pairs
      hreflangsArray.forEach(([key, value], index) => {
        // Get the link element by its index
        cy.get('link[hreflang]')
          .eq(index)
          .then($element => {
            // Assert that the element has the correct hreflang attribute (key)
            cy.wrap($element).should('have.attr', 'hreflang', key)

            // Assert that the element has the correct href attribute (value)
            cy.wrap($element).should('have.attr', 'href', value)
          })
      })
    })
  })
})
