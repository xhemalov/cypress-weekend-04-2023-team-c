const text = {
  h1: 'Plane tickets to China',
  popularCities: 'Popular cities in China',
  airlinesIn: 'Airlines based in China',
  airlinesTo: 'Popular airlines flying to China',
  airportNear: 'Airports near China',
  airportIn: 'Airports in China',
  popularAirportIn: 'Popular airports in China',
  explore: 'Explore airlines and airports',
}

describe('Test China country botview page', () => {
  it('Test <head>', () => {
    cy.log('1. Visit page')
    cy.visit('/en/country/china/?botview=1')

    cy.log('2. Assert title text')
    cy.get('head title').should('have.text', 'Cheap flights to China | Kiwi.com')

    cy.log('3. Assert meta description')
    cy.get('[name="description"]')
      .should('have.attr', 'content')
      .should(
        'include',
        'Find the cheapest flights to China. Compare different airlines, choose the best price, and book your cheap plane ticket to China.',
      )

    cy.log('4. Assert canonical')
    cy.get('[rel="canonical"]')
      .should('have.attr', 'href')
      .should('include', 'https://www.kiwi.com/en/country/china/')
  })

  it('Verify body - part 1', () => {
    cy.log('1. Visit page')
    cy.visit('/en/country/china/?botview=1')

    cy.log('2. Verify h1 title')
    cy.get('h1').contains(text.h1).and('be.visible')

    cy.log('3. Verify navbar is visible')
    cy.getByTestId('NavBar').should('be.visible')

    cy.log('4. Verify search form')
    cy.get('#sticky-search-form')
      .should('be.visible')
      .find('[type=pageLoader]')
      .should('be.visible')
    cy.get('#sticky-search-form').should('be.visible').find('a').should('not.exist')

    cy.log('5. Verify content is visible')
    cy.getByTestId('CountryLandingPage').should('be.visible')

    cy.log('6. Verify why Kiwi banner')
    cy.getByTestId('WhyKiwiBanner').should('be.visible')

    cy.log('7. Verify breadcrumb')
    cy.findByRole('navigation', { name: /Breadcrumb/i }).should('be.visible')

    cy.log('8. Verify section popular cities')
    cy.contains(text.popularCities).should('be.visible')

    cy.log('9. Verify section explore airlines and airports')
    cy.contains(text.explore).should('be.visible').siblings().as('sectionFlight')
    cy.get('@sectionFlight').contains(text.airlinesIn).should('be.visible')
    cy.get('@sectionFlight').contains(text.airlinesTo).should('be.visible')

    cy.log('10. Verify section airports in China')
    cy.contains(text.airportIn).should('be.visible').siblings().as('sectionAirport')
    cy.get('@sectionAirport').contains(text.airportNear).should('be.visible')
    cy.get('@sectionAirport').contains(text.popularAirportIn).should('be.visible')
  })
})
