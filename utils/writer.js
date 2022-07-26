const fs = require("fs");
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}

//writes data to a file at a specified path
function writeToFile (filePath, data) {

      fs.writeFile(filePath, data+"\n", { flag: "a+" }, (err) => {
        if (err) throw err;
        console.log('Data saved to ' + filePath);
      });
}

var writeJson = exports.writeJson = function(response, arg1, arg2, savePath) {
  var code;
  var payload;

  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }

  if(!code) {
    // if no response code given, we default to 200
    code = 200;
  }
  if(payload === "Invalid status value" || payload === "Email is not valid") {
    code = 400;
  } else if(payload === "Email is already subscribed") {
    code = 409;
  }

  if(typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }
  if ( typeof savePath !== 'undefined' && savePath )
  {
    if(code !== 400 || code !== 409) {
      writeToFile(savePath, payload);
    }
  }
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}
