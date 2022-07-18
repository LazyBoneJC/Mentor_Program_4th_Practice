const { findSourceMap } = require("module");
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
// 1016 不合群的人
function solve(lines) {
  let n = Number(lines[0]);
  let aCount = 0;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i] === "A") {
      aCount++;
    }
  }
  let bCount = n - aCount;

  if (aCount === bCount || aCount === 0 || bCount === 0) {
    console.log("PEACE");
  } else {
    let whoLose = aCount < bCount ? "A" : "B";
    for (let i = 1; i < lines.length; i++) {
      if (lines[i] === whoLose) {
        console.log(i);
      }
    }
  }
}
