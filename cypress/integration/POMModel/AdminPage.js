class AdminPage
{
    PageTitle()
    {
        cy.get('.head>h1').should('contain.text','System Users')

    }

    fillSystemUser_data(username)
    {
        cy.get('#searchSystemUser_userName').type(username)
        
        cy.get('#searchSystemUser_userType').then(function(allvalue)
        {
            const subvalue = allvalue.text()
            cy.log(subvalue)   
        })
        cy.get('#searchBtn').click()

        cy.get('#searchSystemUser_userType').select('ESS').should('have.value',2)
        
    }

    fillSystemUser_data2()
    {
        cy.get('#searchSystemUser_employeeName_empName').type('hann')
        cy.get('.ac_results').type('{enter}')
        cy.get('#searchSystemUser_status').select('Disabled').should('have.value',0)

        cy.get('#searchBtn').click()
    }

    GetallTabel_RowColoum()
    {
        //row value
        cy.get('#resultTable>tbody>tr').contains('Fiona Grace').should('be.visible')
        cy.get('#resultTable>tbody>tr').contains('Fa G').should('not.be.visible')

        //column value
        cy.get('#resultTable>tbody>tr:nth-child(2) td')
    }


    Getalldata_value()
    {
        // perticular checkbox check value  
        cy.get('#resultTable>tbody>tr td:nth-child(4)').each(($el, index, $ellist) =>
        {
            const name = $el.text()
            cy.log(name)
            if(name.includes('Robert Craig'))
            {
                cy.get('#resultTable>tbody>tr td:nth-child(1) #ohrmList_chkSelectRecord_9').check()
                .should('be.checked') 
            }
            else if(name.includes('Fiona Grace'))
            {
                cy.get('#resultTable>tbody>tr td:nth-child(1) #ohrmList_chkSelectRecord_15').check()
                .should('be.checked')
            }

        })

    }

    GetAll_columandata()
    {
        cy.get("table>tbody>tr>td:nth-child(2)").each(($row, index, $listrow) =>
        {
            const allrowvalue = $row.text()
            cy.log(allrowvalue)

        })

    }




}
export default AdminPage