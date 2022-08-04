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
// LIOJ 1005 聯誼話題相親數
function solve(lines) {
  // 找出所有正因數（扣掉自己）10 -> 1, 2, 5
  let inputArr = [];
  let outputArr = [];
  for (let i = 0; i < lines.length; i++) {
    if (Number(lines[i]) === 0) {
      break;
    }
    inputArr.push(Number(lines[i]));
  }
  // console.log(inputArr);

  for (let i = 0; i < inputArr.length; i++) {
    outputArr.push(findDivisor(inputArr[i]));
  }

  outputArr.forEach((element) => {
    console.log(element);
  });
}

function findDivisor(num) {
  // 相親數（Amicable numbers）
  let amicableNum1 = 0;
  let amicableNum2 = 0;
  let divisorArr = [];
  let amiNumDivisorArr = [];

  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      divisorArr.push(i);
    }
  }
  // console.log("divisorArr:", divisorArr);

  for (let i = 0; i < divisorArr.length; i++) {
    amicableNum1 += divisorArr[i];
  }
  // console.log("amicableNum1:", amicableNum1);

  for (let i = 1; i <= Math.floor(amicableNum1 / 2); i++) {
    if (amicableNum1 % i === 0) {
      amiNumDivisorArr.push(i);
    }
  }
  // console.log("amiNumDivisorArr:", amiNumDivisorArr);

  for (let i = 0; i < amiNumDivisorArr.length; i++) {
    amicableNum2 += amiNumDivisorArr[i];
  }
  // console.log("amicableNum2:", amicableNum2);

  if (amicableNum2 === num) {
    return amicableNum1;
  } else {
    return "QQ";
  }
}
