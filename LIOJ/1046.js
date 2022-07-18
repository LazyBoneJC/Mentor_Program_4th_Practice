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
// 1046: 圈圈叉叉
// idea: 先檢查 row, 再檢查 column, 最後檢查 X
function solve(lines) {
  let arr = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr.push(lines[i][j]);
    }
  }
  // console.log(arr);
  console.log(check(arr));
}

function check(arr) {
  // check row
  for (let i = 0; i <= 6; i += 3) {
    if (arr[i] === arr[i + 1] && arr[i + 1] === arr[i + 2]) {
      return arr[i];
    }
  }
  // check column
  for (let i = 0; i < 3; i++) {
    if (arr[i] === arr[i + 3] && arr[i + 3] === arr[i + 6]) {
      return arr[i];
    }
  }
  // check X
  if (arr[0] === arr[4] && arr[4] === arr[8]) {
    return arr[0];
  }

  if (arr[2] === arr[4] && arr[4] === arr[6]) {
    return arr[2];
  }

  return "DRAW";
}
