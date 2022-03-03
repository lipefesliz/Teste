/// <reference types="Cypress" />

import homePage from '../pages/home-page/home.page';
import searchResultPage from '../pages/search-result-page/search-result.page';

context('search', () => {

    it('DeveValidarPesquisa_Quando_PesquisarArtigo', () => {
        //Arrange
        var text = 'teste';
        var searchResult = 'Resultados da busca por: teste';
        cy.visit('');

        //Act
        cy.get(homePage.search).click();
        cy.get(homePage.searchField).clear().type(text);
        cy.get(homePage.submit).click();

        //Assert
        cy.get(searchResultPage.content).should('contain', searchResult);
    })
})