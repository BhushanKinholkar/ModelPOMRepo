

class LoginPage
{
    lunchpage()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.url().should('include','https://opensource-demo.orangehrmlive.com/')
    }
    
    fillemail(emailvalue)
    {
        const email = cy.get('#txtUsername')
        email.clear()
        email.type(emailvalue)
        return this
        
    }
    
    fillpassword(passwordvalue)
    {
        const passvalue = cy.get('#txtPassword')
        passvalue.clear()
        passvalue.type(passwordvalue)
        return this
    }

    loginclick()
    {
        cy.get('#btnLogin').click()
    }

}

export default LoginPage