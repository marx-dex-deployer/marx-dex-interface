describe('Pool', () => {
  beforeEach(() => cy.visit('/pool'))
  it('add liquidity links to /add/EVMOS', () => {
    cy.get('#join-pool-button').click()
    cy.url().should('contain', '/add/EVMOS')
  })

  it('import pool links to /import', () => {
    cy.get('#import-pool-link').click()
    cy.url().should('contain', '/find')
  })
})
