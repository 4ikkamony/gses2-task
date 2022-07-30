const fs = require("fs");

/**
 * Writes data to a file at filePath
 *
 * @param filePath {string}
 * @param data {string}
 */
function writeToFile (filePath, data) {

      fs.writeFile(filePath, data+"\n", { flag: "a+" }, (err) => {
        if (err) throw err;
      });
}

/**
 * Issues response
 *
 * @param response {object}
 * @param code {number} response code
 * @param payload {string} response message
 * @param savePath {string} passed into writeToFile if theres a need to save response
 */
exports.answer = function(response, code, payload, savePath) {

  if(!code) {
    // if no response code given, we default to 200
    code = 200;
  }

  //if no savepath given, don't try to save anything
  if ( typeof savePath !== 'undefined' && savePath )
  {
    writeToFile(savePath, payload);
  }
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}
