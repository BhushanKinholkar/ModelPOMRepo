import EmploymentStatusPage from '../POMModel/EmploymentStatusPage'
import LoginPage from '../POMModel/LoginPage'
import DashboardPage from '../POMModel/DashboardPage'
import JobtitlePage from '../POMModel/JobtitlePage'
import AdminPage from '../POMModel/AdminPage'
import PayGradePage from '../POMModel/PayGradePage'


describe('Test cases on Employment status page', function()
{

    const lp = new LoginPage()
    const dp = new DashboardPage()
    const esp = new EmploymentStatusPage()


    beforeEach(function()
    {
        lp.lunchpage()
        lp.fillemail('Admin')
        lp.fillpassword('admin123')
        lp.loginclick()
        dp.Click_on_Adminpage()

    })

    it('Click on Emp', function()
    {
        esp.Clickon_EmployemenStatus()
        esp.GettheEmployementname()
        esp.Getthetablevalue()
        esp.Clickonthe_tablechecckbox()

    })



})




