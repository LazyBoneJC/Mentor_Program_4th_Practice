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
// 1033: 最近點對
function solve(lines) {
  let T = Number(lines[0]);
  let data = [];
  let minDistence = Infinity;
  let minPoint1 = -1; // 紀錄距離最小的點位
  let minPoint2 = -1; // 紀錄距離最小的點位

  // 將座標 push 進 data 陣列中，data array 為二維陣列
  for (let i = 1; i <= T; i++) {
    data.push(lines[i].split(" "));
  }
  console.log(data); // [ [ '2', '2' ], [ '1', '1' ], [ '10', '10' ], [ '100', '100' ] ]
  console.log(data.length); // 4

  // 點對計算距離公式
  // Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2))
  // i from 0 to 3
  for (let i = 0; i < data.length; i++) {
    let counter = i;
    while (counter < data.length - 1) {
      counter++;
      console.log("i:", i, "Counter:", counter);

      let x = Math.pow(
        Math.abs(Number(data[i][0]) - Number(data[counter][0])),
        2
      );
      let y = Math.pow(
        Math.abs(Number(data[i][1]) - Number(data[counter][1])),
        2
      );
      let result = Math.sqrt(x + y);
      if (result < minDistence) {
        minDistence = result;
        minPoint1 = i;
        minPoint2 = counter;
      }
    }
  }

  if (Number(data[minPoint1][0]) === Number(data[minPoint2][0])) {
    if (Number(data[minPoint1][1]) < Number(data[minPoint2][1])) {
      console.log(data[minPoint1][0], data[minPoint1][1]);
      console.log(data[minPoint2][0], data[minPoint2][1]);
    } else {
      console.log(data[minPoint2][0], data[minPoint2][1]);
      console.log(data[minPoint1][0], data[minPoint1][1]);
    }
  } else if (Number(data[minPoint1][0]) < Number(data[minPoint2][0])) {
    console.log(data[minPoint1][0], data[minPoint1][1]);
    console.log(data[minPoint2][0], data[minPoint2][1]);
  } else {
    console.log(data[minPoint2][0], data[minPoint2][1]);
    console.log(data[minPoint1][0], data[minPoint1][1]);
  }
}
