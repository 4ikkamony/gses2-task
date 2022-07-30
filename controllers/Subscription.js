'use strict';

const utils = require('../utils/writer.js');
const Subscription = require('../service/SubscriptionService');
const reader = require('../utils/reader.js');



module.exports.sendEmails = function sendEmails (req, res) {
  Subscription.sendEmails()
    .then(function (response) {
        utils.answer(res, 200, "Emails sent");
    })
    .catch(function (response) {
        utils.answer(res, 400, response);
    });
};


module.exports.subscribe = function subscribe (req, res) {
  let savePath = 'data/emails.json';
  let email = req.swagger.params['email'].value;
  //see if email wasn't previously added
  reader.isUnique(email)
      .then(function (response){
        Subscription.subscribe(email)
            .then(function (response) {
                utils.answer(res, 200, email, savePath);
            })
            .catch(function (response) {
                utils.answer(res, 400, "Enter valid e-mail");
            });

      })
      .catch(function (response){
          utils.answer(res, 409, "E-mail was already added");
      });
};
