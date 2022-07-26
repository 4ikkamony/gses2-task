'use strict';

var utils = require('../utils/writer.js');
var Rate = require('../service/RateService');


module.exports.rate = function rate (req, res, next) {
    var savePath = 'data/BTCtoUAH.json';
  Rate.rate()
    .then(function (response) {
      utils.writeJson(res, response, undefined, savePath);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


