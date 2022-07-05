var readline = require("readline");
const { arrayBuffer } = require("stream/consumers");
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
  let max = Number(lines[0]); // 能拿幾件
  let total = Number(lines[1]); // 共有幾件
  let arr = []; // 存放物品的陣列
  let ans = 0;

  for (let i = 2; i <= total + 1; i++) {
    arr.push(Number(lines[i]));
  }

  if (max === 0) {
    console.log(ans);
  } else {
    if (max > total) {
      max = total;
    }

    arr.sort(function (num1, num2) {
      if (num1 === num2) {
        return 0;
      } else if (num1 > num2) {
        return 1;
      } else {
        return -1;
      }
    });

    for (let i = arr.length - 1; i >= arr.length - max; i--) {
      ans += arr[i];
    }

    console.log(ans);
  }
}
