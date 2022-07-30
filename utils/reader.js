const fs = require("fs");

const storedEmailsPath = 'data/emails.json';


/**
 * See if email is already present in the database
 *
 * @param email{string}
 * @returns {Promise<unknown>} if email wasn't present, resolves it
 */
exports.isUnique = function(email) {
    return new Promise(function(resolve, reject) {
        fs.readFile(storedEmailsPath, function (err, data) {
            if (err) {
                //if file doesn't exist for some reason, create it
                fs.open(storedEmailsPath, 'w', function (err, file) {
                    if (err) throw err;
                });
                throw err;
            }
            if(data.includes(email)){
                console.log(data);
                reject("Email is already subscribed");
            } else {
                resolve(email);
            }
        })
    });
}

/**
 * Iterates through an array
 *
 * @param arr string array
 * @returns {boolean} true if at least one string is not empty
 */
isArrEmpty = function (arr) {

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== "")
            return false;
    }
    return true;
}

/**
 * Reads the database and returns an array of emails(strings)
 *
 * @returns {Promise<unknown>} if array has no non-empty strings, reject
 */
exports.getEmails = function() {

    return new Promise(function(resolve, reject) {
        fs.readFile(storedEmailsPath, function (err, data) {
            if (err) {
                //if file doesn't exist for some reason, create it
                fs.open(storedEmailsPath, 'w', function (err, file) {
                    if (err) throw err;
                });
                throw err;
            }
            const emails = data.toString().split(" \n");
            //check if emails has non-empty strings
            if(isArrEmpty(emails))
                reject("No email addresses to send to");
            else
                resolve(emails);
        });
    });
}

