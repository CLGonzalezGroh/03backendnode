const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const src = fs.createReadStream("learning-node/streams/big.txt");
  src.pipe(res);
});

server.listen(3000);
