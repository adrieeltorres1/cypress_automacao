describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://mail.google.com/mail/u/0/')
    cy.get('#identifierId')
    .click()
    .type('adrieltorreslds@gmail.com')
  })
})