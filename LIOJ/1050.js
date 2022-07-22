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
// 1050 Two sum 經典題
function solve(lines) {
  let tmp = lines[0].split(" ");
  let n = Number(tmp[0]);
  let target = Number(tmp[1]);
  let tmp2 = lines[1].split(" ");
  let arr = [];
  for (let i = 0; i < tmp2.length; i++) {
    arr.push(Number(tmp2[i]));
  }

  // console.log(n, target, arr);
  console.log(twoSum(arr, target));
}

function twoSum(arr, target) {
  let index1 = -1;
  let index2 = -1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === target) {
        index1 = i;
        index2 = j;
      }
    }
  }

  return index1.toString() + " " + index2.toString();
}
