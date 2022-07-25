'use strict';


/**
 * Отримати поточний курс BTC до UAH
 * Запит має повертати поточний курс BTC до UAH використовуючи будь-який third party сервіс з публічним АРІ
 *
 * returns Integer
 **/
exports.rate = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

