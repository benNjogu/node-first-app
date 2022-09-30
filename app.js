const EventEmitter = require("events");
const emitter = new EventEmitter();

//Register a listener
emitter.on("messageLogged", (arg) => console.log("Listener called", arg)); //-> Listener called { id: 1, url: 'http://' }

//Raise an event
emitter.emit("messageLogged", { id: 1, url: "http://" });

//Exercise
emitter.on('logging', (arg) => console.log("logged", arg))//-> logged { data: 'message' }

emitter.emit("logging", {data: 'message'})
