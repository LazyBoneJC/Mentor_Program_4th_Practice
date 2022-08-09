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
// LIOJ 1007 聯誼排行大比拼
function solve(lines) {
  let arr = [];
  let result = [];
  let max = -Infinity;

  for(let i = 1; i < lines.length; i++) {
    arr.push(lines[i].split(" "));
  }
  // console.log(arr);
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i][1] >= max) {
      // 若 result 中已有 data, 先 pop 出來
      if(result.length && arr[i][1] > max) {
        for(let j = 0; j < result.length; j++) {
          result.pop();
        }
      }
      result.push(arr[i]);
      max = Number(arr[i][1]);
    }
  }

  for(let i = 0; i < result.length; i++) {
    console.log(result[i][0]);
  }
}
