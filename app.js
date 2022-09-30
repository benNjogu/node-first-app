const Logger = require("./logger");
const logger = new Logger();

//Register a listener
logger.on("messageLogged", (arg) => console.log("Listener called", arg)); //-> Listener called { id: 1, url: 'http://' }

logger.log("message");
