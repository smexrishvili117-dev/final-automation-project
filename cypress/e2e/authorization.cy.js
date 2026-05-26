describe('Authorization Tests', () => {

  let user

  before(() => {
    cy.fixture('users').then((data) => {
      user = data
    })
  })

  it('ტესტი 1 - Successful Login', () => {
    cy.login(user.validUser.email, user.validUser.password)
    cy.url().should('not.include', '/login')
    cy.get('a.iprof').should('exist')
  })

  it('ტესტი 2 - Empty Login Validation', () => {
    cy.visit('/ka')
    cy.get('a.rprof').first().click()
    cy.get('input.imail').first().should('be.visible')
    cy.get('button.form-button').first().click()
    cy.get('input.imail').first().should('have.value', '')
    cy.get('a.rprof').should('exist')
  })

  it('ტესტი 3 - Add Product To Cart', () => {
    cy.login(user.validUser.email, user.validUser.password)
    cy.visit('/ka/product/2486-Flexi-New-Neon-S-Tape-5m-orange')
    cy.get('button.add-pro', { timeout: 10000 }).should('be.visible').click()
    cy.visit('/ka/cart')
    cy.url().should('include', '/cart')
    cy.get('button.plus.change-qty-by-one').should('exist')
  })

  it('ტესტი 4 - Remove Product From Cart', () => {
    cy.login(user.validUser.email, user.validUser.password)
    cy.visit('/ka/product/2486-Flexi-New-Neon-S-Tape-5m-orange')
    cy.get('button.add-pro', { timeout: 10000 }).should('be.visible').click()
    cy.visit('/ka/cart')
    cy.get('a[href*="remove_from_cart"]').should('exist')
    cy.get('a[href*="remove_from_cart"]').first().click({ force: true })
    cy.get('a[href*="remove_from_cart"]').should('not.exist')
  })

  it('ტესტი 5 - Register Without Terms', () => {
    cy.visit('/ka/register')
    cy.get('input[placeholder="სახელი გვარი"]').first().type('Salome')
    cy.get('input[type="email"]').first().type(user.validUser.email)
    cy.get('input[type="password"]').first().type(user.validUser.password)
    cy.get('input[type="password"]:visible').last().type(user.validUser.password)
    cy.get('button').contains('რეგისტრაცია').click({ force: true })
    cy.url().should('include', '/register')
    cy.get('body').should('contain', 'რეგისტრაცია')
  })

})
