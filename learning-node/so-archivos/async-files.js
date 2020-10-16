const fs = require("fs");

const file = process.argv[2];
console.log(file);
const content = fs.readFile(file, function (err, content) {
  if (err) {
    return console.log(err);
  }
  content = content.toString();
  console.log(content);
  const lines = content.split("\n").length;
  console.log(lines);
});
