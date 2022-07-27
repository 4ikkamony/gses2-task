const fs = require("fs");

//check if email is present in database
exports.isUnique = function(email) {
    return new Promise(function(resolve, reject) {
        fs.readFile('data/emails.json', function (err, data) {
            if (err) throw err;
            if(data.includes(email)){
                console.log(data);
                reject("Email is already subscribed");
            } else {
                resolve(email);
            }
        })
    });
}

//get array of emails that are stored in database
exports.getEmails = function() {
    return new Promise(function(resolve, reject) {
        fs.readFile('data/emails.json', function (err, data) {
            if (err) reject(err);
            var emails = data.toString().split("\n");
            resolve(emails);
        });
    });
}

