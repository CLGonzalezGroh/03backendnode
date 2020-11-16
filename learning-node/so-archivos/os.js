const os = require("os");

console.table(os.cpus());
console.log(
  "IP address",
  os.networkInterfaces().eth0.map((i) => i.address)
);
console.log(
  "Free Memory:",
  (os.freemem() / 1024 / 1024 / 1024).toFixed(2),
  "Gb"
);
console.log("OS Type:", os.type());
console.log("OS Version:", os.release());
console.log("User Info:", os.userInfo());
