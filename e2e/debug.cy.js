describe('Debug Login', () => {
  it('check login', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login')
    cy.get('#loginFrm_loginname').type('salome')
    cy.get('#loginFrm_password').type('salome02042003')
    cy.screenshot('before-login')
    cy.get('button[type="submit"]').first().click()
    cy.wait(3000)
    cy.screenshot('after-login')
    cy.url().then(url => cy.log(url))
  })
})
