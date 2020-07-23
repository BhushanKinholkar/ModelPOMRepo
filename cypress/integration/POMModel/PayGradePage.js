class PayGradePage
{

    ClickOnPay_Link()
    {
        

        cy.get('#menu_admin_Job').next('ul').then(function($lp)
        {
            cy.wrap($lp).invoke('show')
            cy.wrap($lp).contains('Pay Grades').click({force: true})
            
        })

        cy.url().should('include','/admin/viewPayGrades')
        cy.get('.head>h1').contains('Pay Grades').should('contain.text','Pay Grades')
    }

    GetthePayGrde_value()
    {
        cy.get('#resultTable>tbody>tr>td:nth-child(2)').each(function($val, $index, $vallist)
        {
            const allvalue = $val.text()
            cy.log(allvalue)

        })

        cy.get('#resultTable>tbody>tr>td:nth-child(2)').should('have.length',2)

    }

    GettheCurrence_value()
    {
        cy.get('#resultTable>tbody>tr>td:nth-child(3)').each(function($cur, $index, $currlist)
        {
            const currencevalue = $cur.text()
            cy.log(currencevalue)
        })

        cy.get('#resultTable>tbody>tr>td:nth-child(3)').should('have.length',2)
    }

    Verifythevalue()
    {
        cy.get('#resultTable>tbody>tr:nth-child(1) td:nth-child(2)').contains('Chief Executive Officer (C.E.O)')
        .should('contain.text','Chief Executive Officer (C.E.O)')

    }

    Verifythevalue_currency()
    {
        cy.get('#resultTable>tbody>tr:nth-child(2) td:nth-child(3)').contains('United States Dollar')
        .should('contain.text','United States Dollar')

    }







}
export default PayGradePage









