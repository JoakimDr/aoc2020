const { group, count } = require("console");
var fs = require("fs");

var inputData = [];
try {
  var data = fs.readFileSync("aoc2020/aoc6.txt", "utf8");
  //    console.log(data.toString());
  inputData = data.split(/\r?\n/);
} catch (e) {
  console.log("Error:", e.stack);
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

var groupAnswers = [];
var groupSize = 0;
var sumAllAnswers = 0;

inputData.forEach((row) => {
  if(row.length === 0){
    // We have reached the end of this groups answers
    var counts = {};
    
    for (var i = 0; i < groupAnswers.length; i++) {
      var num = groupAnswers[i];
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    
    sumAllAnswers += Object.values(counts).filter((count) => parseInt(count) === groupSize).length; 
    unique = 0;
    groupAnswers.length = 0;
    groupSize = 0;

  } else {

    for(i = 0; i< row.length;i++){
      groupAnswers.push(row.charAt(i));
    }
    groupSize++;
  }
})
var counts = {};
    
for (var i = 0; i < groupAnswers.length; i++) {
  var num = groupAnswers[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
sumAllAnswers += Object.values(counts).filter((count) => parseInt(count) === groupSize).length; 

console.log('sum: ' + sumAllAnswers)

console.log(sumAllAnswers);