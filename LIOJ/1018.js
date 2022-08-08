const { count } = require("console");
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
function solve(lines) {
  let numArr = lines[1].split(" ");
  let max = Number(numArr[numArr.length - 1]);
  let countArr = [];
  for (let i = 0; i <= max; i++) {
    countArr[i] = 0;
  }
  // console.log(countArr);

  for (let i = 0; i < numArr.length; i++) {
    countArr[numArr[i]]++;
  }

  let result = -Infinity;
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] > result) {
      result = countArr[i];
    }
  }

  // console.log(numArr);
  // console.log("max:", max);
  // console.log(countArr);
  console.log(result);
}
