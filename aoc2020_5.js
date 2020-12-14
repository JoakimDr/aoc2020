var fs = require("fs");

var inputData = [];
try {
  var data = fs.readFileSync("aoc2020/aoc5.txt", "utf8");
  //    console.log(data.toString());
  inputData = data.split(/\r?\n/);
} catch (e) {
  console.log("Error:", e.stack);
}

var region = inputData;

const getSeatRow = (rowCode) => {
  var rowRegion = 128;
  var uRowLimit = 128;
  var lRowLimit = 0;

  for (rowChar = 0; rowChar < 7; rowChar++) {
    switch (rowCode.charAt(rowChar)) {
      case "F":
        uRowLimit = uRowLimit - rowRegion / 2;
        break;
      case "B":
        lRowLimit = lRowLimit + rowRegion / 2;
      default:
        break;
    }
    rowRegion = uRowLimit - lRowLimit;
  }
  return lRowLimit;
};

const getSeatNo = (rowCode) => {
  var seatRegion = 8;
  var uSeatNo = 8;
  var lSeatNo = 0;

  for (seatChar = 7; seatChar < 10; seatChar++) {
    switch (rowCode.charAt(seatChar)) {
      case "L":
        uSeatNo = uSeatNo - seatRegion / 2;
        break;
      case "R":
        lSeatNo = lSeatNo + seatRegion / 2;
      default:
        break;
    }
    seatRegion = uSeatNo - lSeatNo;
  }
  return lSeatNo;
};

var maxSeatId = 0;
var seatIdList = [];

inputData.forEach((inputRow) => {
  var seatRow = getSeatRow(inputRow);
  var seatNo = getSeatNo(inputRow);
  var seatId = seatRow * 8 + seatNo;
  if (seatId > maxSeatId) {
    maxSeatId = seatId;
  }
  seatIdList.push(seatId);
  //  console.log(maxSeatId + " " + seatId + " " + seatRow + " " + seatNo);
});
seatIdList.sort(function (a, b) {
  return a - b;
});
for (i = 0; i < seatIdList.length; i++) {
  //  console.log(seatIdList[i]);
  if (i > 0 && seatIdList[i] - seatIdList[i - 1] > 1) {
    console.log(seatIdList[i - 1] + " " + seatIdList[i]);
  }
}

console.log("max " + maxSeatId);
