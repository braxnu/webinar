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
  }
};
