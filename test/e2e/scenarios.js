
// spec.js
/*
describe('angularjs homepage', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});*/
/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Wizard App', function() {
  'use strict';

  describe('AllGenome list view', function() {

    beforeEach(function() {
      browser.get('https://hyperbrowser.uio.no/wizard/static/hyperbrowser/wizard/');
    });


    it('should filter the allGenome list as a user types into the search box', function() {

      var genomeList = element(by.model('defaultTrack'));
      //var query = element(by.model('query'));
      element(by.cssContainingText('option', 'Chromatin')).click();
      expect(genomeList.getInnerHtml()).toBe("Chromatin");

      //query.sendKeys("hg19");
      expect(genomeList.count()).toBe(1);

      //query.clear();
      //query.sendKeys('mm9');
      expect(genomeList.count()).toBe(1);
    });
  });

});

