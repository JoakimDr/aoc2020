
/* ex 1
var fs = require('fs');

var inputData = [];
try {  
    var data = fs.readFileSync('aoc2020/aoc2.txt', 'utf8');
//    console.log(data.toString());
    inputData = data.split(/\r?\n/);    
} catch(e) {
    console.log('Error:', e.stack);
}

var okResults = 0;
console.log(inputData.length);
inputData.forEach((row) =>{
    var inputParts = row.split(':');
    var numberMin = inputParts[0].split('-')[0];
    var numberMax = inputParts[0].split('-')[1].split(' ')[0];
    var checkCharacter = inputParts[0].split(' ')[1];
    var checkData = inputParts[1];
    var resultCheck = checkData.split(checkCharacter).length - 1;
    console.log(inputParts[0] + ' ' + inputParts[1])
    if (numberMax >= resultCheck && resultCheck >= numberMin){
        okResults++;
    }
});

console.log(okResults);

*/

var fs = require('fs');

var inputData = [];
try {  
    var data = fs.readFileSync('aoc2020/aoc2.txt', 'utf8');
//    console.log(data.toString());
    inputData = data.split(/\r?\n/);    
} catch(e) {
    console.log('Error:', e.stack);
}

var okResults = 0;
console.log(inputData.length);
inputData.forEach((row) =>{
    var inputParts = row.split(':');
    var Pos1 = inputParts[0].split('-')[0];
    var Pos2 = inputParts[0].split('-')[1].split(' ')[0];
    var checkCharacter = inputParts[0].split(' ')[1];
    var checkData = inputParts[1];
    console.log(inputParts[0] + ' ' + inputParts[1])
    if ((checkData[Pos1] === checkCharacter && checkData[Pos2] !== checkCharacter) || (checkData[Pos1] !== checkCharacter && checkData[Pos2] === checkCharacter)){
        okResults++;
    }
});

console.log(okResults);
