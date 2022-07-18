var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
});

var lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on("line", function (line) {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on("close", function () {
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
// 1014 不九人世
function solve(lines) {
  console.log(whichDigit(lines[0]));
}

function whichDigit(num) {
  let arr = [];
  let digit = 0;
  for (let i = 1; i <= num; i++) {
    if (!isNine(i)) {
      digit++;
      arr.push(Number(i));
    }
  }
  console.log(arr);
  return digit;
}

function isNine(num) {
  let numStr = num + "";
  for (let i = 0; i < numStr.length; i++) {
    if (Number(numStr[i]) === 9) {
      return true;
    }
  }
  return false;
}

// 1,  2,  3,  4,  5,  6,  7,  8,  10, 11
// 12, 13, 14, 15, 16, 17, 18, 20, 21, 22
// 23, 24, 25, 26, 27, 28, 30, 31, 32, 33
// 34, 35, 36, 37, 38, 40, 41, 42, 43, 44
// 45, 46, 47, 48, 50, 51, 52, 53, 54, 55
// .................................., 88
// 89, 100
