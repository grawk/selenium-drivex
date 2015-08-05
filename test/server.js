'use strict';
var TestServer = require('selenium-reference-webapp');
var testServer = new TestServer();

before(function (done) {
    testServer.start(8008, function () {
        done();
    });

});
after(function (done) {
    testServer.stop(function () {
        done();
    });
});
