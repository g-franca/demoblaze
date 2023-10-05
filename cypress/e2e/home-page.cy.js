const homePage = require("../pages/home-page");
const cartPage = require("../pages/cartsPage");
const monitorPage = require("../pages/monitorsPage");

describe('template spec', () => {

  beforeEach(() => {
    cy.visit("../");
  });

  //Agregar varias categorías:

  it('Test001 - Should verify that Category List is correctly visible on the main page', () => {
    homePage.verifyCategoryList();
  });

  //Agregar un Ítem de Cada Categoría:
  it('Test002 - Add one item from each category to chart', () => {
    let ProductList = ['Samsung galaxy s6','Sony vaio','Apple monitor 24']
    homePage.AddItemsFromHomePagetoChart(ProductList[0]);
    homePage.AddItemsFromHomePagetoChart(ProductList[1]);
    homePage.accessMonitorsPage();
    monitorPage.selectOneMonitorAndAddToChart(ProductList[2]);
    homePage.accessCartPage();
    cartPage.verifyMultiProductsInChart(ProductList);
  });

  //Carrito de Compras - Actualización Correcta:
  it('Test003 - Verify that the cart is updated correctly with the addition of a product.', () => {
    const product1 = 'ASUS Full HD';
    const product2 = 'Samsung galaxy s6';
    homePage.accessMonitorsPage();
    monitorPage.selectOneMonitorAndAddToChart(product1);//alert is not showing in UI but there is a response in network
    homePage.accessCartPage();
    cartPage.verifyProducts1InChart(product1);
    homePage.accessHomePageBtn();
    homePage.AddItemsFromHomePagetoChart(product2);
    homePage.accessCartPage();
    cartPage.verifyProducts2InChart(product1, product2);
  });

  it('Test004 - Verify that the cart is updated correctly when a product is removed.', () => {
    const product1 = 'ASUS Full HD';
    const product2 = 'Samsung galaxy s6';
    homePage.accessMonitorsPage();
    monitorPage.selectOneMonitorAndAddToChart(product1);//alert is not showing in UI but there is a response in network
    homePage.accessCartPage();
    cartPage.verifyProducts1InChart(product1);
    homePage.accessHomePageBtn();
    homePage.AddItemsFromHomePagetoChart(product2);
    homePage.accessCartPage();
    cartPage.deleteOneProduct();
    cartPage.verifyNewList(product1);
  });

  //Flujo de Checkout con Visualización de Número de Tarjeta:
  it('Test005 - Should Proceed with purchase and verify credit card number', () => {
    let ProductList = ['Samsung galaxy s6', 'Sony vaio']
    homePage.AddItemsFromHomePagetoChart(ProductList[0]);
    homePage.AddItemsFromHomePagetoChart(ProductList[1]);
    homePage.accessCartPage();
    cartPage.preCheckOut(ProductList[0]);
    cartPage.purchaseOrder();
  });

  
})


