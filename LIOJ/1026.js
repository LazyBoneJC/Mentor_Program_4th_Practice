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
// 1026: 判斷等比數列
function solve(lines) {
  let totalNum = Number(lines[0]);
  let tmpArr = lines[1].split(" ");
  let arr = [];
  for (let i = 0; i < totalNum; i++) {
    arr.push(Number(tmpArr[i]));
  }
  if (isGeometricProgression(arr)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function isGeometricProgression(arr) {
  let r = arr[1] / arr[0]; // 公比 r
  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i] / arr[i - 1] === r)) {
      return false;
    }
  }
  return true;
}
