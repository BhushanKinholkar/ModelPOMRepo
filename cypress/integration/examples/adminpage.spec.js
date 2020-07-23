import AdminPage from '../POMModel/AdminPage'
import DashboardPage from  '../POMModel/DashboardPage'
import LoginPage from '../POMModel/LoginPage'
import DasshboardPage from '../POMModel/DashboardPage'

describe('Admin pages testcases', function()
{
    const ap = new AdminPage()
    const dh = new DasshboardPage()
    const lp = new LoginPage()
    beforeEach(function()
    {
        lp.lunchpage()
        lp.fillemail('Admin')
        lp.fillpassword('admin123')
        lp.loginclick()
        dh.Click_on_Adminpage()

    })

    it('Get the page title',function()
    {
        ap.PageTitle()
        cy.log('sdfhksd')
    })
    
    it('Enter the all data',function()
    {
        ap.fillSystemUser_data('fiona.grace')

    })

    it('Enter the value all data', function()
    {
        ap.fillSystemUser_data2()

    })

    it('Table value', function()
    {
        //ap.Getalldata_value()
        ap.GetallTabel_RowColoum()

    })

    it.only('Get all coloumn value', function(){
        ap.GetAll_columandata()

    })

    
})
