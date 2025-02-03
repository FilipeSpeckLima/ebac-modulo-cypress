///<reference types="cypress"/>

describe('funcionalidade: login', () => {

    it('deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('filipe@cypress.com.br')
        cy.get('#password').type('341817')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, filipe (não é filipe? Sair)')
    })
})
