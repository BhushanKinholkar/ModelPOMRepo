class EmploymentStatusPage
{
    Clickon_EmployemenStatus()
    {
        cy.get('#menu_admin_viewAdminModule').next('ul').then(function($sp)
        {
            cy.wrap($sp).invoke('show')
            cy.wrap($sp).contains('Employment Status').click({force: true})

        })

        cy.url().should('include','/employmentStatus')

    }

    GettheEmployementname()
    {
        cy.get('#search-results div.head > h1').contains('Employment Status').should('contain.text','Employment Status')
    }

    Getthetablevalue()
    {
        cy.get('#resultTable tbody>tr').each(function($emp, index, $empllist)
        {
            const empvalue = $emp.text()
            cy.log(empvalue)

        })

        cy.get('#resultTable tbody>tr').should('have.length',7)
    }

    Clickonthe_tablechecckbox()
    {
        cy.get('#resultTable tbody>tr').each(function($emp, index, $empllist)
        {
            const empvalue = $emp.text()
            
            if(empvalue.includes('Full-Time Probation'))
            {
                cy.get('#resultTable tbody>tr:nth-child(4) td:nth-child(1) #ohrmList_chkSelectRecord_4').check()
            }

        })

    }




}

export default EmploymentStatusPage


























