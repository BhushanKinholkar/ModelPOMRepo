Cypress.Commands.add('login', function(email,password)
{
    cy.visit('https://ui.freecrm.com/')
    cy.get("[name='email']").type(email)
    cy.get("[name='password']").type(password)
    cy.contains('Login').click()


})

