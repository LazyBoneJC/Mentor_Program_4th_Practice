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
// 1047 搜尋數字 20220719 Rewrite
function solve(lines) {
  // 直覺的做法
  let temp = lines[0].split(" ");
  let n = Number(temp[0]);
  let m = Number(temp[1]);

  // 使用 ES6 解構 (但要注意形態問題 n & m 都是字串)
  // let [n, m] = lines[0].split(" ");

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(lines[i]));
  }

  // 其實不用排序，因為題目說已排好，由小到大
  // arr.sort(function (a, b) {
  //   return a - b;
  // });

  for (let i = lines.length - m; i <= lines.length - 1; i++) {
    // console.log(linear_search(arr, Number(lines[i])));
    console.log(binary_search(arr, Number(lines[i])));
  }
}

// 二元搜索法
function binary_search(arr, target) {
  let L = 0;
  let R = arr.length - 1;

  while (L <= R) {
    let M = Math.floor((L + R) / 2);

    if (arr[M] === target) {
      return M;
    } else if (arr[M] > target) {
      R = M - 1;
    } else if (target > arr[M]) {
      L = M + 1;
    }
  }

  return -1;
}

// 線性搜尋法
function linear_search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
