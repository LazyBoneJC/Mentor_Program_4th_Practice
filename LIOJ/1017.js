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
  let max = Number(lines[0]); // 最多能夠帶走幾樣物品
  let total = Number(lines[1]); // 一共有幾項物品
  let result = [];
  let ans = 0;

  if (max === 0) {
    console.log(ans);
  } else {
    if (max > total) {
      max = total;
    }

    for (let i = 2; i <= total + 1; i++) {
      result.push(Number(lines[i]));
    }

    result.sort(function (num1, num2) {
      if (num1 === num2) {
        return 0;
      } else if (num1 > num2) {
        return 1;
      } else {
        return -1;
      }
    });

    // let toIndex = result.length;
    // while (toIndex > 1) {
    //   toIndex--;
    //   for (let i = 0; i < toIndex; i++) {
    //     if (result[i] > result[i + 1]) {
    //       let tmp = result[i];
    //       result[i] = result[i + 1];
    //       result[i + 1] = tmp;
    //     }
    //   }
    // }

    for (let i = result.length - 1; i >= result.length - max; i--) {
      ans += result[i];
    }

    // console.log(result);
    console.log(ans);
  }
}
