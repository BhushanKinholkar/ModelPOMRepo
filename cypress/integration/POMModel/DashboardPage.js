import LoginPage from "./LoginPage"

class DasshboardPage
{
    Click_on_LeavePage()
    {
        cy.get('#menu_leave_viewLeaveModule').click()
    }
    Click_on_POMpage()
    {
        cy.get('#menu_pim_viewPimModule').click()
    }

    Click_on_Adminpage()
    {
        cy.get('#menu_admin_viewAdminModule').click()

    }

    Click_on_Timepage()
    {
        cy.get('#menu_time_viewTimeModule').click()
    }
    
    Click_on_Recurementpage()
    {
        cy.get('#menu_recruitment_viewRecruitmentModule').click()
    }

    Click_on_AssignLeave()
    {
        cy.contains('Assign Leave').click({force:true})

    }

    Clicko_on_LeaveList()
    {
        cy.contains('Leave List').click({force:true})

    }

    Click_on_Timesheet()
    {
        cy.get('.quickLinkText:eq(2)').click()

    }


}
export default DasshboardPage
