const { findSourceMap } = require("module");
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
// 1016 不合群的人
function solve(lines) {
  let arr = [];
  for (let i = 1; i < lines.length; i++) {
    arr.push(lines[i]);
  }
  findMinority(arr);
}

function findMinority(arr) {
  if (arr.length === 1) {
    console.log("PEACE");
    return;
  }

  let standard = Math.ceil(Number(arr.length) / 2);
  let numOfA = 0;
  let numOfB = 0;
  let indexOfA = [];
  let indexOfB = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      numOfA++;
      indexOfA.push(i + 1);
    } else {
      numOfB++;
      indexOfB.push(i + 1);
    }
  }

  // console.log(numOfA, indexOfA, numOfB, indexOfB);

  if (numOfA === numOfB || numOfA === 0 || numOfB === 0) {
    console.log("PEACE");
    return;
  } else if (numOfA < numOfB) {
    for (let i = 0; i < indexOfA.length; i++) {
      console.log(indexOfA[i]);
    }
    return;
  } else {
    for (let i = 0; i < indexOfB.length; i++) {
      console.log(indexOfB[i]);
    }
    return;
  }
}
