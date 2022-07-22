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
// 1048 最大連續和
function solve(lines) {
  let n = Number(lines[0]);
  let arr = [];
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }

  let max = -Infinity;
  let currentSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + currentSum > arr[i]) {
      currentSum += arr[i];
    } else {
      currentSum = arr[i];
    }
    if (currentSum > max) {
      max = currentSum;
    }
  }

  console.log(max);
}

// example:
// [ 2, -3, 4, 10, -4, 7, 2, -5 ]
// currentSum = 0
// [2] 2
// [2, 3] -1
// [4] 4
// [4, 10] 14
// [4, 10, -4] 10
// [4, 10, -4, 7] 17
// [4, 10, -4, 7, 2] 19
// [4, 10, -4, 7, 2, -5] 14 => max 停留在 19
// console.log(max)
