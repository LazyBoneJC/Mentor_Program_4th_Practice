// 練習二：BMI 計算
// BMI 值的計算公式為：體重 / 身高^2。

// 假設體重是 70，身高是 180(1.8m)，BMI 就是 70/(1.8*1.8) = 21。

// 現在請你寫出一個簡單的 BMI 計算器，用兩個變數代表體重跟身高，算出 BMI 之後判斷 BMI 是落在哪個範圍內並輸出相對應的字串。

// 體重過輕：BMI < 18.5
// 正常範圍：18.5 <= BMI < 24
// 過重：24 <= BMI < 27
// 輕度肥胖：27 <= BMI < 30
// 中度肥胖：30 <= BMI < 35
// 重度肥胖：35 <= BMI

let weight = 70;
let height = 180;
let bmi;

// Solution 1: 使用 Function
// Calc_BMI(weight, height);

// Solution 2: 不使用 Function
bmi = (weight / (height / 100) ** 2).toFixed(1);
console.log("BMI: " + bmi);

if (bmi < 18.5) {
  console.log("體重過輕！");
} else if (bmi >= 18.5 && bmi < 24) {
  console.log("體重正常");
} else if (bmi >= 24 && bmi < 27) {
  console.log("過重");
} else if (bmi >= 27 && bmi < 30) {
  console.log("輕度肥胖");
} else if (bmi >= 30 && bmi < 35) {
  console.log("中度肥胖");
} else if (bmi >= 35) {
  console.log("重度肥胖");
}

// function Calc_BMI(weight, height_cm) {
//   console.log("Welcome to BMI Calculator!");

//   let height_m = height_cm / 100;
//   console.log("Your Weight: " + weight + " kg, Height: " + height_m + " m");

//   bmi = (weight / height_m ** 2).toFixed(1);
//   console.log("BMI: " + bmi);
// }
