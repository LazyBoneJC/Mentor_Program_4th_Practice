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
// 1034: 凱薩加密 Caesar cipher
// ASCII: a = 97 ~ z = 122, d = 1
// if ascii > 122 => -26
function solve(lines) {
  let shiftDigits = Number(lines[0]);
  let str = lines[1];
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let temp = str[i].charCodeAt(0);
    // console.log("Before shifting:", str[i], temp);
    temp += shiftDigits;
    while (temp > 122) {
      // 197 171 145
      temp -= 122; // 75 49 23
      temp = 96 + temp; // 171 145 119
    }
    newStr += String.fromCharCode(temp);
    // console.log("After shifting:", newStr[i], temp);
  }

  console.log(newStr);
}
