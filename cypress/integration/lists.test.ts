describe('Swap', () => {
  beforeEach(() => {
    cy.visit('/swap')
  })

  it('list selection persists', () => {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('#list-introduction-choose-a-list').click()
    cy.get('#list-row-tokens-marx-dex-eth .select-button').click()
    cy.reload()
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('#list-introduction-choose-a-list').should('not.exist')
  })

  it('change list', () => {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('#list-introduction-choose-a-list').click()
    cy.get('#list-row-tokens-marx-dex-eth .select-button').click()
    cy.get('#currency-search-selected-list-name').should('contain', 'MarX DEX')
    cy.get('#currency-search-change-list-button').click()
    cy.get('#list-row-tokens-1inch-eth .select-button').click()
    cy.get('#currency-search-selected-list-name').should('contain', '1inch')
  })
})
