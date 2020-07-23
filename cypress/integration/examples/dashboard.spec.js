import DasshboardPage from '../POMModel/DashboardPage'
import LoginPage from '../POMModel/LoginPage'

describe('Dashboad Test cases', function()
{
    const dh = new DasshboardPage()
    const lp = new LoginPage()
    beforeEach(function()
    {
        const lp = new LoginPage()
        lp.lunchpage()
        lp.fillemail('Admin')
        lp.fillpassword('admin123')
        lp.loginclick()
        cy.title().should('eq','OrangeHRM')

    })

    it('Login user name', function()
    {
        cy.get('.head>h1').should('contain.text','Dashboard')

        cy.get('#welcome').then(function(name){
            const valname = name.text()
            cy.log(valname)

        })
        
    })

    it('Click on Assign Leave', function()
    {
        dh.Click_on_AssignLeave();
        cy.url().should('include','/assignLeave')
        cy.get('.head>h1').should('contain.text','Assign Leave')

    })

    it('Click on Leave List', function()
    {
        dh.Clicko_on_LeaveList()
        cy.url().should('include','/viewLeaveList/reset/1')
        cy.get('.head>h1').should('contain.text','Leave List')

    })

    it('Click on Timesheet', function()
    {
        dh.Click_on_Timesheet()
        cy.url().should('include','/time/viewEmployeeTimesheet')
        cy.get('.head>h1').first().should('contain.text','Select Employee')

    })

    
    it('Click on Leave click', function()
    {
        dh.Click_on_LeavePage()
        cy.url().should('include','/leave/viewLeaveList')

    })

    it('Click on PIM link', function()
    {
        dh.Click_on_POMpage()
        cy.url().should('include','/pim/viewEmployeeList')

    })

    it('Click on Admin page', function()
    {
        dh.Click_on_Adminpage()
        cy.url().should('include','/admin/viewSystemUsers')

    })

    /*it('Click on Time page', function(){
        dh.Click_on_Timepage()
        cy.url().should('include','/time/viewEmployeeTimesheet')

    })*/

    it('Click on Recuremnt page', function(){
        dh.Click_on_Recurementpage()
        cy.url().should('include','/recruitment/viewCandidates')

    })





})