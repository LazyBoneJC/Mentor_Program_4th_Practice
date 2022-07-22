// 練習六：費式數列
// 費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ....

// 用比較數學一點的講法，就是：
// fib(0) = 0
// fib(1) = 1
// for n >=2, fib(n) = fib(n-1) + fib(n-2)

// 現在，請你寫出一個 fib 的函式，回傳位在第 n 個位置的數字

// 遞迴
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// Array
function fibTable(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib[n];
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(8));

console.log(fibTable(1));
console.log(fibTable(2));
console.log(fibTable(8));
