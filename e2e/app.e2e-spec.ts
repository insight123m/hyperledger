import { AngularTestPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('Starting tests for angular-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be angular-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('angular-app');
    })
  });

  it('navbar-brand should be hackathon@0.1.10',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('hackathon@0.1.10');
  });

  
    it('Shipment component should be loadable',() => {
      page.navigateTo('/Shipment');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Shipment');
    });

    it('Shipment table should have 8 columns',() => {
      page.navigateTo('/Shipment');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(8); // Addition of 1 for 'Action' column
      });
    });

  
    it('Contract component should be loadable',() => {
      page.navigateTo('/Contract');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Contract');
    });

    it('Contract table should have 13 columns',() => {
      page.navigateTo('/Contract');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(13); // Addition of 1 for 'Action' column
      });
    });

  

});
