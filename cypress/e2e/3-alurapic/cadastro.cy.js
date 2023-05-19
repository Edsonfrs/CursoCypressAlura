/// <reference types="cypress" />

describe('Cadastro de usuários alurapic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })

    it('verifica mensagens de validação', () => {

        cy.registerButton()
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click()
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    })

    it('verifica mensagem de email invalido', () => {
        cy.registerButton()
        cy.get('input[formcontrolname=email]').type('fulano')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
        
    })

    it('verifica mensagem de nome completo com menos de dois caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname=fullName]').type('f{enter}')
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
        
    })

    it('verifica mensagem de nome do usuário com menos de dois caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname=userName]').type('f{enter}')
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible')
        
    })

    it('verifica mensagem de senha com menos de oito caracteres', () => {
        cy.contains('a', 'Register now').click()
        cy.get('input[formcontrolname=password]').type('p{enter}')
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
        
    })

    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {

        it(`resgistra novo usuário - ${usuario.userName} `, () => {
            cy.registerButton()
            cy.get('input[formcontrolname="email"]').type(usuario.email)
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName)
            cy.get('input[formcontrolname="userName"]').type(usuario.userName)
            cy.get('input[formcontrolname="password"]').type(usuario.password)
            cy.contains('button', 'Register').click()
    
        })

    })

    

    

    

})