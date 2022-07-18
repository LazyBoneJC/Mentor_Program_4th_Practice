// hw2：首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

function capitalize(str) {
  // let newStr = "";
  // if ("a" <= str[0] && str[0] <= "z") {
  //   newStr += String.fromCharCode(str.charCodeAt(0) - 32);
  // } else {
  //   newStr += str[0];
  // }
  // for (let i = 1; i < str.length; i++) {
  //   newStr += str[i];
  // }
  // return newStr;

  return str[0].toUpperCase() + str.slice(1); // 用內建 function
}

console.log(capitalize("nick"));
console.log(capitalize("Nick"));
console.log(capitalize(",hello"));
