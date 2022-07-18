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
// 1014 不九人世 => 提示：9進位 轉 10進位
function solve(lines) {
  console.log(nineToDecimal(Number(lines[0])));

  // JavaScript 其實有內建function可用 parseInt(100, 2) = 4
  // console.log(parseInt(lines[0], 9));
}

function nineToDecimal(num) {
  let decimalNum = 0;
  let counter = 0;

  while (num !== 0) {
    decimalNum += (num % 10) * Math.pow(9, counter);
    num = Math.floor(num / 10);
    counter++;
  }

  return decimalNum;
}
