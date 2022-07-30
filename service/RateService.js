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
    let value = 0;
    let i = 0;
    //send the request to api
    request('https://bitpay.com/api/rates', (error, response, body) => {
      // parse the json answer and get the current bitcoin value
      const data = JSON.parse(body);
      //look for the needed rate(BTC to UAH)
      for (i = 0; i < data.length; i++) {
        if (data[i].code === "UAH")
          break;
      }
        //store the rate
        value = data[i].rate;
      //if, for some reason, no value retrieved, reject
      if ( typeof value !== 'undefined' && value )
      {
        resolve(""+value);
      } else {
        reject("Invalid status value");
      }
    });
  });
}