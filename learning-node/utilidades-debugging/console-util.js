// %s - String
// %d - Number
// %i - parseInt(value, 10)
// %f - parseFloat(value)
// %j - JSON
// %o - Object
// %c - Css
// %% - signo de '%'

console.log("un %s y un %s", "gatito", "perrito");
console.info("Hello world");
console.warn("Hello error");
console.error("Hello error");

console.assert(42 == "42");
console.assert(42 === "47");

// console.trace("Error");

const util = require("util");
const debuglog = util.debuglog("foo");

debuglog("Hello from foo");
