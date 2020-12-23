const { group, count } = require("console");
var fs = require("fs");

var inputData = [];
try {
  var data = fs.readFileSync("aoc2020/aoc7.txt", "utf8");
  //    console.log(data.toString());
  inputData = data.split(/\r?\n/);
} catch (e) {
  console.log("Error:", e.stack);
}


var validBags = [];

const FindBagsForColor = (data, searchAdjective, searchColor) => {
  var bagColor;
  var bagAdjective;

  data.forEach((row) => {
    var containerAdjective = row.split(' ')[0];
    var containerColor = row.split(' ')[1];
    // This row contains only one bag on the right side
    if(row.indexOf(',') === -1){
      if(row.split('contain ')[1] !== 'no other bags.'){
        bagAdjective = row.split('contain ')[1].split(' ')[1];
        bagColor = row.split('contain ')[1].split(' ')[2];
        if(bagAdjective === searchAdjective && bagColor === searchColor){
           validBags.push(containerAdjective + ' ' + containerColor);
          var moreBags = FindBagsForColor(data, containerAdjective, containerColor);
          validBags.push.apply(moreBags);
        }
      }      
    } else {
      // Split the bags into an array
      var containedBags = row.split('contain ')[1].split(', ');
      containedBags.forEach((containedBag) => {
        bag = containedBag.split(' ');
        bagAdjective = bag[1];
        bagColor = bag[2];
        if(bagAdjective === searchAdjective && bagColor === searchColor){
          validBags.push(containerAdjective + ' ' + containerColor);
          var moreBags = FindBagsForColor(data, containerAdjective, containerColor);
          validBags.push.apply(moreBags);
        }
      })
    }
     console.log(validBags.length);
  })
  return validBags;
}

var foo = new Set(FindBagsForColor(inputData, 'shiny', 'gold'));
console.log(foo.size);

// part2 (not working yet)

// var bagContents = [];
// var numberOfBags = 0;

// const FindContainedBagsForColor = (data, searchAdjective, searchColor) => {
//   var actualColor;
//   var actualAdjective;  

//   data.forEach((row) => {
//     actualAdjective = row.split(' ')[0];
//     actualColor = row.split(' ')[1];
//     if(actualAdjective === searchAdjective && actualColor === searchColor){
//       // we must search for all bags it contains recursively
//       if(row.indexOf(',') === -1){
//         // we only got one bag type to the right
//         if(row.split('contain ')[1] !== 'no other bags.'){
//           bagAdjective = row.split('contain ')[1].split(' ')[1];
//           bagColor = row.split('contain ')[1].split(' ')[2];
//           if(actualAdjective === searchAdjective && actualColor === searchColor){
//             bagContents.push(bagAdjective + ' ' + bagColor);
//             numberOfBags += row.split('contain ')[1].split(', ')[0];
//             var moreBags = FindContainedBagsForColor(data, bagAdjective, bagColor);
//             moreBags.forEach((moreBag) => {
//               numberOfBags += moreBag.split('contain ')[1].split(', ')[0];

//             })
//             numberOfBags += moreBags.length;
//             bagContents.push.apply(moreBags);
//           }
//         }      
   
//       } else {
//         var containedBags = row.split('contain ')[1].split(', ');
//         containedBags.forEach((containedBag) => {
//           bag = containedBag.split(' ');
//           bagAdjective = bag[1];
//           bagColor = bag[2];
//           if(bagAdjective === searchAdjective && bagColor === searchColor){
//             bagContents.push(bagAdjective + ' ' + bagColor);
//             numberOfBags++;
//             var moreBags = FindContainedBagsForColor(data, bagAdjective, bagColor);
//             bagContents.push.apply(moreBags);
//           }
//         })
//       }
//     }

//   })
//   return bagContents;

// }

// var foo2 = new Set(FindContainedBagsForColor(inputData, 'shiny', 'gold'));
// console.log(foo2.size);