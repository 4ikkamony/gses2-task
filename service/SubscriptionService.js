'use strict';


/**
 * Відправити e-mail з поточним курсом на всі підписані електронні пошти.
 * Запит має отримувати актуальний курс BTC до UAH за допомогою third-party сервісу та відправляти його на всі електронні адреси, які були підписані раніше.  
 *
 * no response value expected for this operation
 **/
exports.sendEmails = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Підписати емейл на отримання поточного курсу
 * Запит має перевірити, чи немає данної електронної адреси в поточній базі даних (файловій) і, в разі її відсутності, записувати її. Пізніше, за допомогою іншого запиту ми будемо відправляти лист на ті електронні адреси, які будуть в цій базі. 
 *
 * email String Електронна адреса, яку потрібно підписати
 * no response value expected for this operation
 **/
var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;


function isEmailValid(email) {
  if (!email)
    return false;

  if(email.length>254)
    return false;

  var valid = emailRegex.test(email);
  if(!valid)
    return false;

  // Further checking of some things regex can't handle
  var parts = email.split("@");
  if(parts[0].length>64)
    return false;

  var domainParts = parts[1].split(".");
  if(domainParts.some(function(part) { return part.length>63; }))
    return false;

  return true;
}

exports.subscribe = function(email) {
  return new Promise(function(resolve, reject) {
    //check if email is valid
    if(isEmailValid(email)) {
      resolve(email);
    } else {
      reject("Email is not valid");
    }
  });
}

