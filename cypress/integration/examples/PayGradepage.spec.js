import LoginPage from '../POMModel/LoginPage'
import DashboardPage from '../POMModel/DashboardPage'
import JobtitlePage from '../POMModel/JobtitlePage'
import AdminPage from '../POMModel/AdminPage'
import PayGradePage from '../POMModel/PayGradePage'

describe('Test cases on payGrade page',function()
{

    const lp = new LoginPage()
    const ad = new AdminPage()
    const dp = new DashboardPage()
    const pg = new PayGradePage()
    beforeEach(function()
    {
        lp.lunchpage();
        lp.fillemail('Admin')
        lp.fillpassword('admin123')
        lp.loginclick()
        dp.Click_on_Adminpage()
        pg.ClickOnPay_Link()
        
    })

    it('Test case get the value', function()
    {
        pg.GetthePayGrde_value()
    

    })

    it('Test case get the value', function()
    {
        pg.GettheCurrence_value()
    

    })

    it('Test case on varify the name',function()
    {
        pg.Verifythevalue()

    })

    it.only('Test case on currency page', function(){
        pg.Verifythevalue_currency()
    })


})






