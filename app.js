const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files); //-> [ '.git', 'app.js', 'logger.js' ]
fs.readdir("./", function (err, result) {
  if (err) console.log("Error", err);
  else console.log("Result", result); //-> [ '.git', 'app.js', 'logger.js' ]
});
