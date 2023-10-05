
class Cart {

    elements = {
        productsInChart: () => cy.get('tbody#tbodyid'),
        totalPrice: ()=> cy.get('h3[class="panel-title"]'),
        placeOrderBtn: () => cy.get('button[class="btn btn-success"]'),
        
    }

    placeOrderElements = {
        nameInput: () => cy.get('input[id="name"]'),
        CountryInput: () => cy.get('input[id="country"]'),
        creditCardInput: () => cy.get('input[id="card"'),
        creditCardInput: () => cy.get('input[id="card"')
    }

    verifyMultiProductsInChart(ProductList) {
        this.elements.totalPrice().should('contain','1550');
        this.elements.productsInChart().find("tr").each(($products, i, l) => {
            let products = $products.text();
            const textsToCheck = ProductList;
            const containsAnyText = textsToCheck.some((text) => products.includes(text));
            cy.log(products)
            expect(l).to.have.length(3);
            cy.wrap(containsAnyText).should('eq', true);
        });
    }

    verifyProducts1InChart(product) {
        this.elements.totalPrice().should('contain','230');
        this.elements.productsInChart().find("tr").each(($products, i, l) => {
            cy.log($products)
            expect(l).to.have.length(1);
        });
        this.elements.productsInChart().contains('td', product).should('be.visible');
    }

    verifyProducts2InChart(product1,product2) {
        this.elements.totalPrice().should('contain','590');
        this.elements.productsInChart().find("tr").each(($products, i, l) => {
            let products = $products.text();
            const textsToCheck = [product1,product2];
            const containsAnyText = textsToCheck.some((text) => products.includes(text));
            cy.log(products)
            expect(l).to.have.length(2);
            cy.wrap(containsAnyText).should('eq', true);
        });
    }

    deleteOneProduct() {
        cy.get(' tr:nth-child(2) > td:nth-child(4) > a').click();
        cy.request('https://www.demoblaze.com/cart.html#').its('status').should('eq',200)
    };

    verifyNewList(product1) {
        this.elements.totalPrice().should('contain', '230');
        this.elements.productsInChart().find("tr").each(($products, i, l) => {
            cy.log($products)
            expect(l).to.have.length(1);
        });
        this.elements.productsInChart().contains('td', product1).should('be.visible');
    }

    preCheckOut(ProductList) {
        cy.intercept('POST', 'https://api.demoblaze.com/view');
        this.elements.productsInChart().contains('td', ProductList).should('be.visible');
        this.elements.placeOrderBtn().click();
    }

    purchaseOrder() {
        let name = 'Guilherme'
        let country = 'Argentina'
        let creditCard = '123456789' //We can add this info into a JSON
        this.placeOrderElements.nameInput().type(name)
        this.placeOrderElements.CountryInput().type(country)
        this.placeOrderElements.creditCardInput().type(creditCard)
        cy.findByText('Purchase').click({ force: true });
        cy.get('div[class*= "showSweetAlert "]').then($notification => {
            let purchaseNote = $notification.text();
            cy.log(purchaseNote);

            expect(purchaseNote).to.contain(name)
            .and.to.contain(creditCard)
        });
    }

}

module.exports = new Cart();