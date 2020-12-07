var fs = require('fs');

var inputData = [];
try {  
    var data = fs.readFileSync('aoc2020/aoc3.txt', 'utf8');
//    console.log(data.toString());
    inputData = data.split(/\r?\n/);    
} catch(e) {
    console.log('Error:', e.stack);
}


var treesHit = 0;
var xpos = 0;
var ypos = 0;
var xdelta = 1;
var ydelta = 2;
var rowLength = inputData[0].length;

while(ypos < inputData.length){

    if(inputData[ypos].charAt(xpos) === '#'){
        treesHit++;
    }
    console.log('row ' + ypos + 'pos ' + xpos + ':' + inputData[ypos].charAt(xpos) + ' ' + treesHit);

    xpos += xdelta;
    if(xpos >= rowLength){
        xpos = xpos - rowLength;
    }
    ypos +=ydelta;
}

console.log('trees hit ' + treesHit)

