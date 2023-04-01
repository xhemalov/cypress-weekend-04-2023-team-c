describe('task2', () => {
  /**
   * This suite tests URL redirects and language validation for a travel website.
   */
  it('redirect from unsupported language', () => {
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

    cy.log('Visiting URL.')
    cy.visit('mx/cheap-flights/london-united-kingdom/istanbul-turkey')
    cy.log('Verifying that URL was redirected.')
    cy.url().should('contain', 'es/cheap-flights/london-united-kingdom/istanbul-turkey')
  })

  /**
   * This test case validates the supported languages in the app.
   */
  it('languageValidation', () => {
    // TODO move to before?
    cy.log('visiting baseUrl')
    cy.visit('mx/cheap-flights/london-united-kingdom/istanbul-turkey')
    cy.log('Agreeing to a cookie.')
    cy.setCookie('__kwc_agreed', 'true')
    cy.reload()

    cy.log('Reading supported languages from fixture file.')
    cy.readFile('cypress/fixtures/hreflangs.json').then(hreflangs => {
      cy.log('Checking languages available in the app.')
      cy.get('link[hreflang]').each(($element, index) => {
        cy.wrap($element).should('have.attr', 'hreflang', hreflangs[index])
      })
    })
  })
})
