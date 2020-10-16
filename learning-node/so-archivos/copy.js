const fs = require("fs");

fs.copyFile(
  "learning-node/so-archivos/naranja.txt",
  "learning-node/so-archivos/limon.txt",
  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("el archivo fue copiado");
  }
);
