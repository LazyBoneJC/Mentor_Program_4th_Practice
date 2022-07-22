// 練習五：九九乘法表
// 請寫出一個 function table9to9，並列出 1*1 ~ 9*9。

function table9to9() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i}*${j} = ${i * j}`);
    }
  }
}

table9to9();
