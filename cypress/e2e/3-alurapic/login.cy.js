/// <reference types="cypress" />

describe('Login de usuarios alurapic ', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('realizar login de usuário valido', () => {
        cy.login('flavio', 123)
        cy.contains('a', '(Logout)').should('be.visible')
    })

    it('realizar login de usuário invalido', () => {
        cy.login('fulanosicranoso', 321)
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
        
    })

    

    

    

})