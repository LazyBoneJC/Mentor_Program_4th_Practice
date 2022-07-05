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
  // 宣告一個 arr or counter 紀錄因數個數, 因數 === 2就 print Prime, 反之則 print Composite
  let num = Number(lines[0]);
  let arr = [];
  let arrDivisor = [];

  for (let i = 1; i <= num; i++) {
    arr.push(Number(lines[i]));
    arrDivisor.push(0);
  }

  for (let i = 0; i < num; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        arrDivisor[i] += 1;
      }
    }
    // console.log(`arrDivisor[${i}]: ` + arrDivisor[i]);
    if (arrDivisor[i] === 2) {
      console.log("Prime");
    } else {
      console.log("Composite");
    }
  }
}
