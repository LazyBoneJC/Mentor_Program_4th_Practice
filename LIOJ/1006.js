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
  let max = Number(lines[0]);
  let fulledSitsNum = Number(lines[1]);
  let arr = [];
  let evenArr = [];
  let oddArr = [];
  let counter = 0;
  if (fulledSitsNum) {
    for (let i = 2; i < lines.length; i++) {
      if (Number(lines[i]) % 2 === 0) {
        evenArr.push(Number(lines[i]));
      } else {
        oddArr.push(Number(lines[i]));
      }
    }
    arr = evenArr.concat(oddArr);
  }
  // console.log(evenArr, oddArr, arr);

  for (let i = 1; i <= max - 3; i += 2) {
    let pass = true;
    let num1 = i;
    let num2 = i + 2;
    for (j = 0; j < oddArr.length; j++) {
      if (num1 === oddArr[j] || num2 === oddArr[j]) {
        pass = false;
        break;
      }
    }
    if (pass) {
      counter++;
      console.log("<直行奇數檢查>", "i(座位):", i, i + 2, "counter:", counter);
    }
  }

  for (let i = 2; i <= max - 2; i += 2) {
    let pass = true;
    let num1 = i;
    let num2 = i + 2;
    for (j = 0; j < evenArr.length; j++) {
      if (num1 === evenArr[j] || num2 === evenArr[j]) {
        pass = false;
        break;
      }
    }
    if (pass) {
      counter++;
      console.log("<直行偶數檢查>", "i(座位):", i, i + 2, "counter:", counter);
    }
  }

  for (let i = 1; i <= max - 1; i += 2) {
    let pass = true;
    let num1 = i;
    let num2 = i + 1;
    for (j = 0; j < arr.length; j++) {
      if (num1 === arr[j] || num2 === arr[j]) {
        pass = false;
        break;
      }
    }
    if (pass) {
      counter++;
      console.log("<橫列檢查>    ", "i(座位):", i, i + 1, "counter:", counter);
    }
  }

  console.log(counter);
}

// 1 2
// 3 4
// 5 6
// 7 8

// 1 2
