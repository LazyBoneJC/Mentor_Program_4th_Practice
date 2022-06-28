/*
練習一：判斷是否及格
請你自己寫出一段程式碼，是判斷一個叫做 score 的變數是否及格（超過或剛好 60 分），如果及格的話就輸出 pass，否則輸出 fail。

進階練習：
除了判斷是否及格以外，也請你對滿分做出特別判斷，如果是 100 分的話就輸出 you are no1!
*/

let score = Math.floor(Math.random() * 100) + 1;
console.log("Current score: " + score);

// 方法1 if else statement
// note: good redability
if (score === 100) {
  console.log("you are no1!");
} else if (score >= 60) {
  console.log("pass");
} else {
  console.log("fail");
}

// 方法2 Ternary operator 三元運算子
// note: poor readability
// let message = score >= 60 ? (score === 100 ? "you are no1!" : "pass") : "fail";
// console.log(message);
