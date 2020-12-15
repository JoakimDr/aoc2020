var fs = require("fs");

var inputData = [];
try {
  var data = fs.readFileSync("aoc2020/aoc5.txt", "utf8");
  //    console.log(data.toString());
  inputData = data.split(/\r?\n/);
} catch (e) {
  console.log("Error:", e.stack);
}
