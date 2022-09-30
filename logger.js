(function (exports, require, module, __filename, __dirname) {
  console.log(__filename);
  console.log(__dirname);

  var url = "http://mylogger.io/log";

  function log(message) {
    //send an HTTP req
    console.log(message);
  }

  module.exports = log;
});
