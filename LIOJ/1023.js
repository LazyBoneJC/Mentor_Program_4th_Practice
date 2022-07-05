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
// 1023 : 印出聖誕樹
function solve(lines) {
  let n = Number(lines[0]);

  for (let i = 1; i <= n; i++) {
    printLayer(i, n);
  }

  for (let i = 1; i <= n - 1; i++) {
    printTrunk(n);
  }
}

function printLayer(i, n) {
  let str = repeat(" ", n - i) + repeat("*", 2 * i - 1);
  console.log(str);
}

function repeat(str, n) {
  let s = "";
  for (let i = 1; i <= n; i++) {
    s += str;
  }
  return s;
}

function printTrunk(n) {
  let str = repeat(" ", n - 1) + "|";
  console.log(str);
}

// 找規律
// repeat()
// 共 N 列星星
// 每列星星有 2 * i - 1 顆 (會置中)
// 會有 N - i 個空格

// printTrunk()
// 會有 N - 1 列 樹幹 (會置中)
// 會有 N - 1 個空格
