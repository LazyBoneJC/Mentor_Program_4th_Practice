// 練習五：判斷質數
// 請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數。
// （質數的定義：除了 1 以外，沒辦法被所有 < n 的正整數整除）

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    // i 其實檢查到 Math.sqrt(num) 即可，數學有證明
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1));
// 正確回傳值：false

console.log(isPrime(5));
// 正確回傳值：true

console.log(isPrime(37));
// 正確回傳值：true
