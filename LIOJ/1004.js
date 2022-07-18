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
  let sets = Number(lines[0]);
  let arr = [];

  for (let i = 1; i <= sets; i++) {
    arr.push(lines[i].split(" "));
  }
  // console.log(arr);

  for (let i = 0; i < sets; i++) {
    console.log(whoWin(arr[i][0], arr[i][1], arr[i][2]));
  }
}

function whoWin(A, B, K) {
  if (K == 1) {
    if (A > B) {
      return "A";
    } else if (B > A) {
      return "B";
    } else if (A == B) {
      return "DRAW";
    }
  } else if (K == -1) {
    if (A < B) {
      return "A";
    } else if (B < A) {
      return "B";
    } else if (A == B) {
      return "DRAW";
    }
  }
}
