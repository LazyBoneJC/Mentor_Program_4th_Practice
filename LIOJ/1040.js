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
  let separator = lines[0];
  let arr = [];
  for (let i = 2; i < lines.length; i++) {
    arr.push(lines[i]);
  }
  console.log(join(arr, separator));
}

// LIOJ 1040：Array join
function join(arr, separator) {
  // My method :
  // let str = "";
  // for (let i = 0; i < arr.length - 1; i++) {
  //   str += arr[i] + separator;
  // }
  // str += arr[arr.length - 1];

  // Huli's method :
  // 看成 1 + !2!3...
  let str = arr[0];
  for (let i = 1; i < arr.length; i++) {
    str += separator + arr[i];
  }

  return str;
}
