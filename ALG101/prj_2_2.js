// 大小寫互換

let str = "hELLo";
let newStr = "";

for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i);
  if (str[i] >= "a" && str[i] <= "z") {
    newStr += String.fromCharCode(code - 32);
  } else if (str[i] >= "A" && str[i] <= "Z") {
    newStr += String.fromCharCode(code + 32);
  } else {
    newStr += str[i];
  }
}

console.log("Ans:", newStr);

// 人體編譯器
// 宣告 str = hELLo, newStr = "" (空字串)
// for loop (i from 0 to str.length - 1)(0 ~ 4) 遍歷整個 str array

// i = 0
// 宣告 code = str[0] 的 ASCII 十進位數值
// 判斷是否為小寫 ? 是, 將 code - 32 再轉成對應文字, newStr += "H"

// i = 1
// 宣告 code = str[1] 的 ASCII 十進位數值
// 判斷是否為小寫 ? 否
// 判斷是否為大寫 ? 是, 將 code + 32 再轉成對應文字, newStr += "e"

// i = 2
// 宣告 code = str[2] 的 ASCII 十進位數值
// 判斷是否為小寫 ? 否
// 判斷是否為大寫 ? 是, 將 code + 32 再轉成對應文字, newStr += "l"

// ....

// print newStr
