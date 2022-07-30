'use strict';

const utils = require('../utils/writer.js');
const Rate = require('../service/RateService');


module.exports.rate = function rate (req, res) {
  Rate.rate()
    .then(function (response) {
        utils.answer(res, 200, response);
        //utils.writeJson(res, response);
    })
    .catch(function (response) {
        utils.answer(res, 400, "Invalid status value");
        //utils.writeJson(res, response);
    });
};


