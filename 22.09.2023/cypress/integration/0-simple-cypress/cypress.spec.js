describe('Application', () => {
    beforeEach(() => {
        let email = '1@1.com';
        let password = '123';
        cy.visit('http://localhost:3000/')
        cy.get('[data-testid=email_input]').type(`${email}{enter}`)
        cy.get('[data-testid=password_input]').type(`${password}{enter}`)
    })

    it('should shoe Deer after click on 1st element', () => {
        cy.get('ul li:first').first().click()
        cy.get('.popup__caption').should('have.text', 'Deer')
    })

    it('should go to login page after logout', () => {
        cy.get('.header__logout').click()
        cy.get('.auth-form').should('exist')
    })
})