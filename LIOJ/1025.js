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
// 1025 : 水仙花數（Narcissistic number）
function solve(lines) {
  let num = lines[0].split(" "); // ['5', '200']
  let from = Number(num[0]); // 5
  let to = Number(num[1]); // 200

  for (let i = from; i <= to; i++) {
    if (isNarcissistic(i)) {
      console.log(i);
    }
  }
}

function isNarcissistic(num) {
  // 利用 String 的方式處理 (有點偷吃步 => 用 1025_Huli.js 的數學方式比較正統)
  num += "";
  let arr = num.split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += Math.pow(Number(arr[i]), arr.length);
  }

  return Number(num) === sum;
}
