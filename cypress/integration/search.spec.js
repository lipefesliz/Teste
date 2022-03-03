/// <reference types="Cypress" />

import homePage from '../pages/home-page/home.page';
import searchResultPage from '../pages/search-result-page/search-result.page';

context('search', () => {

    it('DeveValidarPesquisa_Quando_PesquisarArtigo', () => {
        //Arrange
        var searchText = 'teste';
        var searchResult = 'Resultados da busca por: teste';
        cy.visit('');

        //Act
        cy.get(homePage.search).click();
        cy.get(homePage.searchField).clear().type(searchText);
        cy.get(homePage.submit).click();

        //Assert
        cy.get(searchResultPage.content).should('contain', searchResult);
        cy.get(searchResultPage.title).should('be.visible');
        cy.get(searchResultPage.thumbnail).should('be.visible');
    })

    it('DeveValidarPesquisa_Quando_ClicarEmPesquisar_Com_InputVazio', () => {
        //Arrange
        var searchResult = 'Resultados da busca por: ';
        cy.visit('');

        //Act
        cy.get(homePage.search).click();
        cy.get(homePage.submit).click();

        //Assert
        cy.get(searchResultPage.content).should('contain', searchResult);
        cy.get(searchResultPage.title).should('be.visible');
        cy.get(searchResultPage.thumbnail).should('be.visible');
    })
})