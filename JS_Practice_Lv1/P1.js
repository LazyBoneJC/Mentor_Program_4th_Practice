// 練習一：印出一到九
// 請你分別用 for loop 以及 while 迴圈，印出 1~9。

let start = 1;
let max = 9;

// for loop
for (let i = start; i <= max; i++) {
  console.log(i);
}

// while loop
while (start <= max) {
  console.log(start++);
}
