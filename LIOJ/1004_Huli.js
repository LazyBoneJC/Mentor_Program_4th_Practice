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
  let m = Number(lines[0]);
  for (let i = 1; i <= m; i++) {
    let [a, b, p] = lines[i].split(" "); // ES6 解構
    console.log(compare(a, b, p));
  }
}

// 這題要注意的是題目範圍，因為數字太大，所以用 JS Number 會出問題，一個很大的數字被轉成 Number 之後會變成無限大（Infinity），所以比較大小就失去作用了。
// 因此要自己用字串實作判斷的邏輯：
function compare(a, b, p) {
  if (a === b) return "DRAW";

  if (p == -1) {
    let tmp = a;
    a = b;
    b = tmp;
  }

  const lengthA = a.length;
  const lengthB = b.length;

  if (lengthA != lengthB) {
    return lengthA > lengthB ? "A" : "B";
  }

  // for (let i = 0; i < lengthA; i++) {
  //   if (a[i] == b[i]) {
  //     continue;
  //   }
  //   return a[i] > b[i] ? "A" : "B";
  // }

  // 但更進一步去想就會發現其實不需要自己用迴圈比大小，因為字串其實比的是字典序，如果兩個字串長度相同，那字典序其實就是數字大小的順序，所以可以簡化成這樣：
  return a > b ? "A" : "B";
}
