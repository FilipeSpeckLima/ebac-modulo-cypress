///<reference types="cypress"/>

describe('funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });
    it('deve fazer login com sucesso', () => {
        cy.get('#username').type('filipe@cypress.com.br')
        cy.get('#password').type('341817')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, filipe (não é filipe? Sair)')
    })

  
    it('deve exibir uma mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type('fie@cypress.com.br')
        cy.get('#password').type('341817')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , "Endereço de e-mail desconhecido.")
    });

    it('Dever exibir erro ao colocar senha invalida', () => {
        cy.get('#username').type('filipe@cypress.com.br')
        cy.get('#password').type('3418')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , "Erro: A senha fornecida para o e-mail filipe@cypress.com.br está incorreta. Perdeu a senha?")
    });
})
