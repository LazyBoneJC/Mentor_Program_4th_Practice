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
// 1032: 平面距離計算
// Math.abs(): 絕對值
function solve(lines) {
  let T = Number(lines[0]); // 共 T 組測試資料
  let data = [];
  for (let i = 1; i <= 4 * T; i++) {
    data.push(Number(lines[i]));
  }
  // console.log(data);

  // 距離公式
  // Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
  // data[0] - data[2], data[1] - data[3], data[4] - data[6], data[5] - data[7]
  for (let i = 0; i < T; i++) {
    let x = Math.pow(Math.abs(data[i * 4] - data[i * 4 + 2]), 2);
    // console.log("x:", data[i * 4], "-", data[i * 4 + 2]);
    let y = Math.pow(Math.abs(data[i * 4 + 1] - data[i * 4 + 3]), 2);
    // console.log("y:", data[i * 4 + 1], "-", data[i * 4 + 3]);
    // console.log("x:", x, "y:", y);
    console.log(Math.sqrt(x + y).toFixed(2));
  }
}
