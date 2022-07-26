'use strict';


/**
 * Отримати поточний курс BTC до UAH
 * Запит має повертати поточний курс BTC до UAH використовуючи будь-який third party сервіс з публічним АРІ
 *
 * returns Integer
 **/
const request = require('request');

exports.rate = function() {
  return new Promise(function (resolve, reject) {
    // send a request to blockchain
    let value = 0;
    let i = 0;
    request('https://bitpay.com/api/rates', (error, response, body) => {
      // parse the json answer and get the current bitcoin value
      const data = JSON.parse(body);
      for (i = 0; i < data.length; i++) {
        if (data[i].code === "UAH")
          break;
      }

        value = data[i].rate;

      if ( typeof value !== 'undefined' && value )
      {
        resolve(""+value);
      } else {
        reject("Invalid status value");
      }
    });
  });
}