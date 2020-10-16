const fs = require("fs");

try {
  const file = process.argv[2];
  console.log(file);
  const content = fs.readFileSync(file).toString();
  console.log(content);
  const lines = content.split("\n").length;
  console.log(lines);
} catch (err) {
  console.log(err);
}
