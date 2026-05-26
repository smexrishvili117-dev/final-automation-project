// login - automationteststore
Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login')
  cy.get('#loginFrm_loginname').should('be.visible').clear().type(username, { delay: 100 })
  cy.get('#loginFrm_password').should('be.visible').clear().type(password, { delay: 100 })
  cy.get('#loginFrm').find('button[type="submit"]').click()
  cy.url({ timeout: 15000 }).should('include', 'account/account')
})

// register - automationexercise
Cypress.Commands.add('registerUser', (user) => {
  cy.get('[data-qa="signup-name"]').type(user.name)
  cy.get('[data-qa="signup-email"]').type(user.email)
  cy.get('[data-qa="signup-button"]').click()

  cy.contains('Enter Account Information').should('be.visible')

  cy.get('#password').type(user.password)
  cy.get('#first_name').clear().type(user.firstName)
  cy.get('#last_name').clear().type(user.lastName)
  cy.get('#company').type(user.company)
  cy.get('#address1').type(user.address1)
  cy.get('#address2').type(user.address2)
  cy.get('#country').select(user.country)
  cy.get('#state').type(user.state)
  cy.get('#city').type(user.city)
  cy.get('#zipcode').type(user.zipcode)
  cy.get('#mobile_number').type(user.mobileNumber)

  cy.get('[data-qa="create-account"]').click()
})

// login - automationexercise
Cypress.Commands.add('loginUser', (email, password) => {
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)
  cy.get('[data-qa="login-button"]').click()
})
