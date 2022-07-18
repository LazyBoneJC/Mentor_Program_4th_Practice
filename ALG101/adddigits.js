// 正規：數學解法
function addDigits(num) {
  let sum = 0;

  // 我的方法：
  // let digits = digitsCount(num);
  // for (let i = 0; i < digits; i++) {
  //   sum += num % 10;
  //   num = Math.floor(num / 10);
  // }

  // Huli's Method : (更為簡潔)
  if (num < 0) {
    num *= -1;
  }

  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  console.log(sum);
}

function digitsCount(num) {
  let result = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    result++;
  }
  return result;
}

addDigits(11111); // 5
addDigits(1314); // 9
addDigits(770880); // 30
addDigits(-34); // 7

// 偷吃步：String解法
function addDigitsByString(num) {
  if (num < 0) num *= -1;
  let sum = 0;
  num += "";
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }
  console.log(sum);
}

addDigitsByString(11111); // 5
addDigitsByString(1314); // 9
addDigitsByString(770880); // 30
addDigitsByString(-34); // 7
