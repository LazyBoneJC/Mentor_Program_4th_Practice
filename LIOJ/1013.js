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
  let n = Number(lines[0]);
  // let arr = [0, 1];

  // 建 Array 的寫法
  // for (let i = 2; i <= 20; i++) {
  //   arr.push(arr[i - 1] + arr[i - 2]);
  // }

  // console.log(arr[n]);
  console.log(f(n));
}

// Recursion 遞迴 解法
function f(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  return f(n - 1) + f(n - 2);
}

// 2: 1
// 3: 2
// 4: 1 + 2 = 3
// 5: 2 + 3 = 5
// 6: 3 + 5 = 8
// 到第 n 樓 = 從 n-1 樓上去 or 從 n-2 樓上去
// 故 到 n 樓的方法 f(n) = f(n-1) + f(n-2)
// 也就是 "費氏數列" 的概念
