// 練習四：乘法表
// 請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果。

function table(n) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${n}*${i} = ${n * i}`);
  }
  return;
}

table(7);
