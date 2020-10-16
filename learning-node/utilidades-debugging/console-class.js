const fs = require("fs");
const { setInterval } = require("timers");

const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

const consoleFile = new console.Console(out, err);

setInterval(() => {
  consoleFile.log(new Date());
  consoleFile.error(new Error("Ooops!"));
}, 2000);
