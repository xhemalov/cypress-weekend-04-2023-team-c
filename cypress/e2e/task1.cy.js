describe('Test China country botview page', () => {
  it('Test <head>', () => {
    cy.log('0. Visit page')
    cy.visit('/en/country/china/?botview=1')
    
    cy.log('1. Assert title text')
    cy.get('head title')
      .should('have.text', 'Cheap flights to China | Kiwi.com')

    cy.log('2. Assert meta description')
    cy.get('[name="description"]')
      .should('have.attr', 'content')
      .should('include', 'Find the cheapest flights to China. Compare different airlines, choose the best price, and book your cheap plane ticket to China.')

    cy.log('3. Assert canonical')
    cy.get('[rel="canonical"]')
      .should('have.attr', 'href')
      .should('include', 'https://www.kiwi.com/en/country/china/')
  })
})