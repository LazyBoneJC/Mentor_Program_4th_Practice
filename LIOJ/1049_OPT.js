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
// 1049 陣列最短距離
// *效能優化：因為數字是小到大排序好的，可將沒必要比較的數字剔除*
function solve(lines) {
  let arrX = lines[1].split(" ").map(Number);
  let arrY = lines[2].split(" ").map(Number);
  console.log(minDistence(arrX, arrY));
}

function minDistence(x, y) {
  let min = Infinity;

  for (let i = 0; i < x.length; i++) {
    let breaker = false;
    for (let j = 0; j < y.length; j++) {
      if (breaker) {
        // console.log(i, j, "break!");
        break;
      }

      let d = Math.abs(x[i] - y[j]);
      if (d < min) {
        min = d;
      }

      if (y[j] > x[i]) {
        breaker = true;
      }
    }
  }

  return min;
}
