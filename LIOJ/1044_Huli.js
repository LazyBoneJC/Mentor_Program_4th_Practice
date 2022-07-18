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
  console.log(padEnd(lines[0], Number(lines[1]), lines[2]));
}

// LIOJ 1044：String padEnd

// Solution 1 : 先填，再把多餘的字截掉
function padEnd1(str, targetLength, padString) {
  if (str.length >= targetLength) {
    return str;
  }

  let newStr = str;
  while (newStr.length < targetLength) {
    newStr += padString;
  }

  let result = "";
  for (let i = 0; i < targetLength; i++) {
    result += newStr[i];
  }

  return result;
}

// Solution 2 : 一個一個去填的作法：
function padEnd(str, targetLength, padString) {
  if (str.length >= targetLength) {
    return str;
  }

  let result = str;
  let counter = 0;
  while (result.length < targetLength) {
    result += padString[counter];
    counter++;
    if (counter === padString.length) {
      counter = 0;
    }
  }

  return result;
}
