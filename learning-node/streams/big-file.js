const fs = require("fs");

const file = fs.createWriteStream("./big.txt");

for (let i = 0; i < 1e6; i++) {
  file.write(
    "Estaba la pajara pinta sentada en un verde limon. Con el pico cortaba la rama, con la pata cortaba la flor"
  );
}

file.end();
