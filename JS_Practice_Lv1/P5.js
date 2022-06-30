// 練習五：判斷大小寫

// 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫。
// isUpperCase("abcd") 正確回傳值：false

// isUpperCase("Abcd") 正確回傳值：true

// isUpperCase("ABCD") 正確回傳值：true

// isUpperCase("aBCD") 正確回傳值：false

// ==============================================================

// idea：把字串用 split()分開(<= 錯誤，不需要)，再用 ASCII Code 判斷

// charCodeAt(index) => 可以得到該index字元的 ASCII Code
// split(): 舉例 "Hello world！"，中間有空格或其他符號才有辦法切

// Solution 1: ASCII Determination
function isUpperCase(str) {
  let str_ascii = str.charCodeAt(0);
  if (str_ascii >= 65 && str_ascii <= 90) {
    return true;
  } else {
    return false;
  }
  // 可以把 if else statement 化簡成：return str_ascii >= 65 && str_ascii <= 90
}

// Solution 2: 用 String 比大小
let isUpperCaseV2 = (str) => {
  if (str[0] >= "A" && str[0] <= "Z") {
    return true;
  }
  return false;
  // 可以把 if else statement 化簡成：return str[0] >= "A" && str[0] <= "Z"
};

console.log(isUpperCase("aBCD"));
console.log(isUpperCaseV2("AbCd"));
