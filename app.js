const os = require("os");

var freeMem = os.freemem();
var totalMem = os.totalmem();

console.log("Total memory " + totalMem);
console.log("Free memory " + freeMem);
