const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);
/**
 * 
{
  root: 'C:\\',
  dir: 'C:\\Users\\User\\Documents\\REPOS\\node-first-app',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
 */
