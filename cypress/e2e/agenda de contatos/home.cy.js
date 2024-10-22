/// <reference types="cypress" />

describe('Teste de inclusão de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir o contato na lista', () => {
        cy.get('input[placeholder="Nome"]').type('Pedro Lucas')
        cy.get('input[placeholder="E-mail"]').type('pedrolucas@gmail.com')
        cy.get('input[placeholder="Telefone"]').type('65 123456789')
        cy.get('.adicionar').click();
    })

    it('Deve editar o primeiro contato', () => {
        cy.get('.edit').eq(0).should('be.visible').click();
        cy.get('input[placeholder="Nome"]').clear().type('Sakuragi');
        cy.get('input[placeholder="E-mail"]').clear().type('Sakuragi@gmail.com');
        cy.get('input[placeholder="Telefone"]').clear().type('22 123456789');
        cy.get('.alterar').should('be.visible').click();
    });

    it('Deve remover o primeiro contato', () => {
        cy.get('.delete').eq(0).click();
    })
})