const fs = require("fs");

fs.mkdir(__dirname + "/Cesar/curso/hola", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  }
});
