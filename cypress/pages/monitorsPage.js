class Categories {

    elements = {
        productsList: () => cy.get('#tbodyid > div > div > div > h4 > a'),
        addToCart: () => cy.get('#tbodyid > div.row > div > a'),
    }

    selectOneMonitorAndAddToChart(monitorName) {
        cy.get("#tbodyid").findByText(monitorName).click();
        this.elements.addToCart().click();
        cy.request('https://www.demoblaze.com/prod.html?idp_=14#').its('status').should('eq',200)
    };


}

module.exports = new Categories();