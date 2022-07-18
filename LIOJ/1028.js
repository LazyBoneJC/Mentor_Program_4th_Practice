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
// 1028: 生命靈數
function solve(lines) {
  let birthDay = lines[0].replace(/ /g, "");
  let spiritNumber = 0;
  let digits = digitsCount(Number(birthDay));

  for (let i = 0; i < digits; i++) {
    spiritNumber += Number(birthDay[i]);
  }

  while (spiritNumber >= 10) {
    // 上面是Huli的判斷條件，下面是我的，我想得太服複雜了
    // Math.floor(spiritNumber / 10) !== 0
    digits = digitsCount(spiritNumber);
    for (let i = 0; i < digits; i++) {
      let tmp1 = spiritNumber % 10;
      let tmp2 = Math.floor(spiritNumber / 10);
      spiritNumber = tmp1 + tmp2;
    }
  }

  console.log(spiritNumber);
}

function digitsCount(num) {
  let result = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    result++;
  }
  return result;
}
