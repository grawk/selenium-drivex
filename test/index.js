'use strict';
var Drivex = require('../');
var webdriver = require('selenium-webdriver');
var assert = require('assert');
var By = webdriver.By;
var drivex;
var driver;

describe('@selenium-drivex@', function () {
    before(function (done) {

        driver = new webdriver.Builder()
          .forBrowser('chrome')
          .build();
        drivex = Drivex(driver, webdriver);
        done();


    });
    after(function (done) {
        driver.quit();
        done();

    });
    it('should @work@', function (done) {
        driver.get('http://localhost:8008');
        driver.sleep(1000);
        drivex.find(by({'locator': 'foo_text', 'type': 'name'})).sendKeys('webdriver');
        drivex.find(by({'locator': '[data-fortext=foo_text]', 'type': 'css'})).click();
        drivex.find(by({locator: '#outy', type: 'css'})).getText()
          .then(function (text) {
              assert.equal(text, 'webdriver');
              done();
          }, function (err) {
              done(err);
          });
    });
});

function by(locator) {
    return By[locator.type](locator.locator);
}

