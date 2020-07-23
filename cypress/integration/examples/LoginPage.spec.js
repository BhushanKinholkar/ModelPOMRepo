import LoginPage from '../POMModel/LoginPage'

describe('Orange HRm testing', function()
{

    it('Verify the title and url', function()
    {
        const lp = new LoginPage()
        lp.lunchpage()
        lp.fillemail('Admin')
        lp.fillpassword('admin123')
        lp.loginclick() 
    })

})
