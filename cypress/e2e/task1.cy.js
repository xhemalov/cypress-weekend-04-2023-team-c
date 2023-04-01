const texts = {
  description:
    'Find the cheapest flights to China. Compare different airlines, choose the best price, and book your cheap plane ticket to China.',
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
      .should('include', texts.description)

    cy.log('4. Assert canonical')
    cy.get('[rel="canonical"]')
      .should('have.attr', 'href')
      .should('include', 'https://www.kiwi.com/en/country/china/')
  })

  it('Verify body - part 1', () => {
    cy.log('1. Visit page')
    cy.visit('/en/country/china/?botview=1')

    cy.log('2. Verify h1 title')
    cy.get('h1').contains(texts.h1).and('be.visible')

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
    cy.contains(texts.popularCities).should('be.visible')

    cy.log('9. Verify section explore airlines and airports')
    cy.contains(texts.explore).should('be.visible').siblings().as('sectionFlight')
    cy.get('@sectionFlight').contains(texts.airlinesIn).should('be.visible')
    cy.get('@sectionFlight').contains(texts.airlinesTo).should('be.visible')

    cy.log('10. Verify section airports in China')
    cy.contains(texts.airportIn).should('be.visible').siblings().as('sectionAirport')
    cy.get('@sectionAirport').contains(texts.airportNear).should('be.visible')
    cy.get('@sectionAirport').contains(texts.popularAirportIn).should('be.visible')
  })
})

it('Test sections', () => {
  cy.log('Buses & trains')
  cy.get('[data-test="InterlinkingSection"]:contains(Buses & trains)')
    .should('be.visible')

  cy.log('Cheapest month to fly to China')
  cy.contains('Cheapest month to fly to China')
    .should('be.visible')

  cy.log('Discover China')
  cy.contains('Discover China')
    .should('be.visible')

  cy.log('China COVID-19 travel restrictions')
  cy.contains('China COVID-19 travel restrictions')
    .should('be.visible')

  cy.log('Departure, Return')
  cy.contains('Departure')
    .should('be.visible')
  cy.contains('Return')
    .should('be.visible')

  cy.log('Popular flights + subsections')
  cy.get('[data-test="InterlinkingSection"]:contains(Popular flights)')
    .eq(0)
    .should('be.visible')
    .within(() => {
      cy.contains('Explore alternative flights to China')
        .should('be.visible')
      cy.contains('Find popular flights from China')
        .should('be.visible')
    })
  
  cy.log('Cheap flights + subsections')
  cy.get('[data-test="InterlinkingSection"]:contains(Cheap flights)')
    .should('be.visible')
    .within(() => {
      cy.contains('Europe')
        .should('be.visible')
      cy.contains('Asia')
        .should('be.visible')
      cy.contains('Africa')
        .should('be.visible')
      cy.contains('North America')
        .should('be.visible')
      cy.contains('South America')
        .should('be.visible')
      cy.contains('Oceania')
        .should('be.visible')
    })
})
