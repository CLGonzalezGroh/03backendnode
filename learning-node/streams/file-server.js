const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile("learning-node/streams/big.txt", (err, data) => {
    if (err) {
      console.error(err);
    }
    res.end(data);
  });
});

server.listen(3000);
// as[i como esta supuestamente consume toda la RAM
