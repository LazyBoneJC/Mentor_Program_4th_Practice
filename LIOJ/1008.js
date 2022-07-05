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
  let num = Number(lines[0]);
  let result = 0;

  if (num === 1) {
    result = 1;
  }

  if (num > 1 && num <= Math.pow(2, 31) - 1) {
    while (num !== 0) {
      for (let i = 0; i <= 31; i++) {
        let LB = Math.pow(2, i); // lowerBoundary
        let UB = Math.pow(2, i + 1); // upperBoundary
        if (num === LB) {
          num -= LB;
          result++;
        } else if (num === UB) {
          num -= UB;
          result++;
        } else if (num >= LB && num <= UB) {
          num -= LB;
          result++;
        }
      }
    }
  }

  console.log(result);
}
