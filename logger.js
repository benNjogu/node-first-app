console.log(__filename); //-> C:\Users\User\Documents\REPOS\node-first-app\logger.js
console.log(__dirname); //-> C:\Users\User\Documents\REPOS\node-first-app

var url = "http://mylogger.io/log";

function log(message) {
  //send an HTTP req
  console.log(message);
}

module.exports = log;
