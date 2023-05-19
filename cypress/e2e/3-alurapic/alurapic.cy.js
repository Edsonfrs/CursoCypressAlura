/// <reference types="cypress" />

describe('Testando as funcionalidades da pagina inicial', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica nome da aplicação na tela inicial', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible')
        
    })

})