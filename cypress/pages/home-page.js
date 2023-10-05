
class Categories {

    elements = {
        categoryList: () => cy.get('#contcont > div > div.col-lg-3 > div'), 
        monitorsFromCategoryList: () => cy.get("#contcont > div > div.col-lg-3 > div>a").eq(3),
        productsList: () => cy.get('#tbodyid > div > div > div > h4 > a'),
        addToCart: () => cy.get('#tbodyid > div.row > div > a'),
        
    }

    navbar = {
        homePageBtn: () => cy.get('#navbarExample > ul > li.nav-item.active > a'),
        cartPageBtn: () => cy.get('#navbarExample > ul > li.nav-item> a#cartur'),
    }

    accessHomePageBtn() {
        this.navbar.homePageBtn().click();
    };

    accessMonitorsPage() {
        this.elements.monitorsFromCategoryList().click();
    }

    accessCartPage() {
        this.navbar.cartPageBtn().click();
    }

    verifyCategoryList() {
        this.elements.categoryList().then($list => {
            const list = $list.text();
            expect(list).to.contain('Phones')
            .and.to.contain('Laptops')
            .and.to.contain('Monitors');
        });
    };

    AddItemsFromHomePagetoChart(product) {
        this.elements.productsList().findByText(product).click();
        this.elements.addToCart().click();
        this.accessHomePageBtn();
    }
    // this.elements.productsList().eq("7").should("contain", "Sony vaio i5").click();
    // this.elements.addToCart().click();
    // this.navbar.homePageBtn().click();

}

module.exports = new Categories();