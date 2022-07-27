'use strict';

var utils = require('../utils/writer.js');
var Subscription = require('../service/SubscriptionService');
var reader = require('../utils/reader.js');

module.exports.sendEmails = function sendEmails (req, res, next) {
  Subscription.sendEmails()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.subscribe = function subscribe (req, res, next) {
  var savePath = 'data/emails.json';
  var email = req.swagger.params['email'].value;
  reader.isUnique(email)
      .then(function (response){
        Subscription.subscribe(email)
            .then(function (response) {
              utils.writeJson(res, response, undefined, savePath);
            })
            .catch(function (response) {
              utils.writeJson(res, response);
            });

      })
      .catch(function (response){
        utils.writeJson(res, response);
      });
};
