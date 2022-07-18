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
// 1027: 信用卡號驗證
// 第一個數字為發卡行，Master Card 是 5 開頭，Visa 是 4，JCB 則是 3
function solve(lines) {
  let cardNum = lines[0].replace(/-/g, ""); // RegExp
  let sumOdd = 0;
  let sumEven = 0;

  // console.log(cardNum);

  // 奇數位加總, 權重：2, 計算的過程中某一位數加權後的結果比 10 大，那請減去 9
  for (let i = 0; i < cardNum.length; i += 2) {
    let tmp = Number(cardNum[i]) * 2;
    if (tmp >= 10) {
      tmp -= 9;
    }
    sumOdd += tmp;
  }

  // 偶數位加總, 權重: 1
  for (let i = 1; i < cardNum.length - 1; i += 2) {
    sumEven += Number(cardNum[i]);
  }

  // console.log("Odd:", sumOdd, "Even:", sumEven);

  let sum = sumOdd + sumEven;
  let checkNum = sum % 10;

  // sum mod 10 => 檢查碼
  // 若檢查碼 !== 0, 檢查碼 = 10 - 檢查碼
  if (checkNum !== 0) {
    checkNum = 10 - checkNum;
  }

  if (Number(cardNum[cardNum.length - 1]) !== checkNum) {
    // console.log("末碼：", cardNum[cardNum.length - 1], "chackNum:", checkNum);
    console.log("INVALID");
  } else if (Number(cardNum[0]) === 5) {
    console.log("MASTER_CARD");
  } else {
    console.log("VISA");
  }
}
