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
// 1031: 完全平方和
function solve(lines) {
  let maxNum = Number(lines[0]);
  let sum = 0;

  for (let i = 0; i <= maxNum; i++) {
    if (isSquare(i)) {
      sum += i;
    }
  }

  console.log(sum);
}

function isSquare(num) {
  let r = Math.floor(Math.sqrt(num));
  return r * r === num;
}
