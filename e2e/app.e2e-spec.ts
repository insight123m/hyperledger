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

  it('navbar-brand should be joule@0.1.9',() => {
    var navbarBrand = element(by.css('.navbar-brand')).getWebElement();
    expect(navbarBrand.getText()).toBe('joule@0.1.9');
  });

  
    it('Shipment component should be loadable',() => {
      page.navigateTo('/Shipment');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Shipment');
    });

    it('Shipment table should have 7 columns',() => {
      page.navigateTo('/Shipment');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(7); // Addition of 1 for 'Action' column
      });
    });

  
    it('Contract component should be loadable',() => {
      page.navigateTo('/Contract');
      var assetName = browser.findElement(by.id('assetName'));
      expect(assetName.getText()).toBe('Contract');
    });

    it('Contract table should have 11 columns',() => {
      page.navigateTo('/Contract');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(11); // Addition of 1 for 'Action' column
      });
    });

  

});
