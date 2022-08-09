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
// LIOJ 1011 183 Club
function solve(lines) {
  let height = lines[1].split(" ");
  let sum = 0;
  for (let i = 0; i < height.length; i++) {
    sum += Number(height[i]);
  }
  let result =
    sum / Number(lines[0]) >= 183 ? console.log("real") : console.log("fake");
}
