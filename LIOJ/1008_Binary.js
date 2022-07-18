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
// 1008 幾個水桶 二進制解法
// 一個數字轉成 Binary 有幾個 1 就是答案
function solve(lines) {
  // console.log(decimalToBinaryCount(Number(lines[0])));

  // String 的 binary 解法
  // let n = Number(lines[0]);
  // let count = 0;
  // let str = n.toString(2); // 將數字轉為 2 進制 的 string
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === "1") {
  //     count++;
  //   }
  // }

  // 位元運算 解法
  let n = Number(lines[0]);
  let count = 0;
  while (n !== 0) {
    count += n & 1; // n AND (前面會自動補0)1
    n >>= 1; // 把 n 右移 1 位
  }

  console.log(count);
}

// 數學的 binary 解法
function decimalToBinaryCount(num) {
  let binaryCount = 0;
  while (num !== 0) {
    if (num % 2 === 1) {
      binaryCount++;
    }
    num = Math.floor(num / 2);
  }
  return binaryCount;
}

// 20 => 10100 (Binary)
// 2 20
//   10 - 0
//   5 - 0
//   2 - 1
//   1 - 0
//   0 - 1
