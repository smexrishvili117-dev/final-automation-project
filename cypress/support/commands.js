Cypress.Commands.add('login', (email, password) => {
  cy.visit('/ka', { timeout: 120000 })
  cy.get('a.rprof').first().click()
  cy.get('input.imail').first().should('be.visible')
  cy.get('input.imail').first().type(email)
  cy.get('input.ipass').first().type(password)
  cy.get('button.form-button').first().click()
})