module.exports = {
  'strona produktu': function(browser) {
    browser
      .url('https://od-natury.pl/tiger-balm-red-masc-tygrysia-czerwona-21g');

    browser
      .expect.element('.product-name h1').to.be.present;

    browser
      .expect.element('.product-price [itemprop="price"]').to.be.present;

    browser
      .end();
  },

  'szukanie': function(browser) {
    browser
      .url('https://od-natury.pl/');

    browser.resizeWindow(1200, 800);

    browser
      .setValue('.search-box input.search-box-text', 'witamina c');

    browser.keys(browser.Keys.ENTER);

    browser.elements('css selector', '.product-item', function(result) {
      browser.assert.equal(result.value.length > 10, true);
    });

    browser.end();
  },

  'kupowanie': function(browser) {
    const page = browser.page['od-natury-produkt']();

    page.navigate();
    page.click('@buyButton');
    page.assert.visible('@buyConfirmation');

    browser.end();
  }
};
