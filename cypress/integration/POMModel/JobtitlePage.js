class JobtitlePage
{
    Clickon_jobtitle()
    {
        cy.get('#menu_admin_Job').next('ul').then(function($lp)
        {
            cy.wrap($lp).invoke('show')
            cy.wrap($lp).contains('Job Titles').click({force:true})
        })

        
    }

    Getthejob_value()
    {
        cy.get('#resultTable>tbody>tr>td:nth-child(2)').each(function($jb, index, $jblist)
        {
            const jbvalue = $jb.text()
            cy.log(jbvalue)

        })

    }
    
    CheckValue()
    {
        cy.get('#resultTable>tbody>tr:nth-child(5) td:nth-child(2)').contains('HR Manager')
        .should('be.visible')
    }
    

}
export default JobtitlePage