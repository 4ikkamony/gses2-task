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
exports.subscribe = function(email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

