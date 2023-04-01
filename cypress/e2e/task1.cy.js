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

describe('Verify botview page', () => {
  it('verify body - part 1', () => {
    cy.log('Visit Page')
    cy.visit('/en/country/china/?botview=1')

    cy.log('Verify h1 title')
    cy.get('h1').contains(text.h1).and('be.visible')

    cy.log('Verify navbar be visible')
    cy.getByTestId('NavBar').should('be.visible')

    cy.log('Veriy Search form ')
    cy.get('#sticky-search-form')
      .should('be.visible')
      .find('[type=pageLoader]')
      .should('be.visible')
    cy.get('#sticky-search-form').should('be.visible').find('a').should('not.exist')

    cy.log('Verify Content is visible')
    cy.getByTestId('CountryLandingPage').should('be.visible')

    cy.log('Verify Why Kiwi banner')
    cy.getByTestId('WhyKiwiBanner').should('be.visible')

    cy.log('Verify Breadcrumb')
    cy.findByRole('navigation', { name: /Breadcrumb/i }).should('be.visible')

    cy.log('Verify Section Popular Cities')
    cy.contains(text.popularCities).should('be.visible')

    cy.log('Verify Section Explore airlines and airports')
    cy.contains(text.explore).should('be.visible').siblings().as('sectionFlight')
    cy.get('@sectionFlight').contains(text.airlinesIn).should('be.visible')
    cy.get('@sectionFlight').contains(text.airlinesTo).should('be.visible')

    cy.log('Verify Section Airports in China')
    cy.contains(text.airportIn).should('be.visible').siblings().as('sectionAirport')
    cy.get('@sectionAirport').contains(text.airportNear).should('be.visible')
    cy.get('@sectionAirport').contains(text.popularAirportIn).should('be.visible')
  })
})
