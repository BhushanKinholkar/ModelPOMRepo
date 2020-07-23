import LoginPage from '../POMModel/LoginPage'
import DashboardPage from '../POMModel/DashboardPage'
import JobtitlePage from '../POMModel/JobtitlePage'

describe('Job title page test cases', function()
{
    const lp = new LoginPage()
    const dp = new DashboardPage()
    const jp = new JobtitlePage()

    beforeEach(function()
    {
        lp.lunchpage()
        lp.fillemail('Admin')
        lp.fillpassword('admin123')
        lp.loginclick()
        dp.Click_on_Adminpage()
        jp.Clickon_jobtitle()

    })

    it('get all job name', function()
    {
        jp.Getthejob_value()
    })

    it('Check the specific value job name', function()
    {
        jp.CheckValue()
    })

})