describe('automation exercise tests', () => {

  beforeEach(function () {
    cy.fixture('data12').as('user')
  })

  it('TC1 - register new user', function () {
    cy.visit('https://automationexercise.com')
    cy.get('a[href="/login"]').click()
    cy.contains('New User Signup!').should('be.visible')

    cy.registerUser(this.user)

    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as').should('be.visible')
  })

  it('TC2 - login with correct credentials', function () {
    cy.visit('https://automationexercise.com/login')
    cy.loginUser(this.user.email, this.user.password)
    cy.contains('Logged in as').should('be.visible')
  })

  it('TC3 - login with wrong credentials', function () {
    cy.visit('https://automationexercise.com/login')
    cy.loginUser(this.user.incorrectEmail, this.user.incorrectPassword)
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })

})
