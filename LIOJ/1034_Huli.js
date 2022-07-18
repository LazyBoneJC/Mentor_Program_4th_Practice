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
// Caesar Cipher 經典解法
function solve(lines) {
  let shiftDigits = Number(lines[0]);
  let str = lines[1];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += caserCipher(shiftDigits, str[i]);
  }

  console.log(result);
}

function caserCipher(n, s) {
  // a: 0, b: 1 ... z:25
  let code = s.charCodeAt(0) - 97;
  let newCode = (code + n) % 26;
  return String.fromCharCode(newCode + 97);
}
