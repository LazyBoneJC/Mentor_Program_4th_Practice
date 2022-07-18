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
  console.log(trim(lines[0]));
}

// LIOJ 1041：String trim (把頭尾的空格去掉)
function trim(str) {
  let newStr = "";
  let start = -1;
  let end = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      start = i;
      break;
    }
  }
  console.log(start);

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== " ") {
      end = i;
      break;
    }
  }
  console.log(end);

  for (let i = start; i <= end; i++) {
    newStr += str[i];
  }

  return newStr;
}
