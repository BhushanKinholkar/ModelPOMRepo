describe('Test cases on environmntal ', function()
{
    it('environmental variable', function()
    {
        cy.visit(Cypress.env('url'))

    })

})