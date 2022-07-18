var readline = require("readline");
const { arrayBuffer } = require("stream/consumers");
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
  let temp = lines[0].split(" ");
  let A = Number(temp[0]);
  let M = Number(temp[1]);
  let numberArr = [];
  let target = [];

  // 分別將讀取的數值 push 進陣列中
  for (let i = 1; i <= A; i++) {
    numberArr.push(Number(lines[i]));
  }
  // console.log("numberArr:", numberArr);

  for (let i = lines.length - M; i < lines.length; i++) {
    target.push(Number(lines[i]));
  }
  // console.log("target:", target);

  // BinarySearch之前, 先將陣列由小到大排列好
  numberArr.sort(function (num1, num2) {
    if (num1 === num2) return 0;
    else if (num1 > num2) return 1;
    else return -1;
  });

  for (let i = 0; i < target.length; i++) {
    if (binarySearchRecursion(numberArr, target[i])) {
      console.log(binarySearch(numberArr, target[i]));
    } else {
      console.log(-1);
    }
  }
}

// 二元搜索法: 遞迴 => 回傳是否找到 target
function binarySearchRecursion(numberArr, target) {
  // 取的陣列中間的 Index
  let middleIndex = Math.floor(numberArr.length / 2);

  // 如果找到就回傳 true
  if (numberArr[middleIndex] === target) {
    return true;
  }

  // 如果還沒找到，而且 numberarr.length 只剩一個元素，表示找不到
  if (numberArr.length === 1) {
    return false;
  }

  // 如果還沒找到
  if (target > numberArr[middleIndex]) {
    // 且 target 大於中間的數值，則取後半段的陣列再搜尋
    return binarySearchRecursion(numberArr.slice(middleIndex), target);
  } else if (numberArr[middleIndex] > target) {
    // 且 target 小於中間的數值，則取前半段的陣列再搜尋
    return binarySearchRecursion(numberArr.slice(0, middleIndex), target);
  }
}

// 進階：回傳 target 在陣列中的位置
function binarySearch(numberArr, target) {
  let L = 0,
    R = numberArr.length - 1;
  while (L <= R) {
    var M = Math.floor((R - L) / 2 + L);
    if (numberArr[M] === target) return M;
    if (numberArr[M] < target) {
      L = M;
    } else {
      R = M - 1;
    }
  }

  // for (let i = L; i <= R; i++) {
  //   if (numberArr[i] === target) {
  //     return i;
  //   }
  // }
}
