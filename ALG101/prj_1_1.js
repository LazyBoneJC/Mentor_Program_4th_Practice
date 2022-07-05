// 字串反轉

// Pseudo Code :
// let str = 輸入的字串
// let newStr = 空字串
// for (i from str.length - 1 to 0) do
//   newStr += str[i]
// end for
// print newStr

let str = "abc";
console.log(str, str.length);
let newStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  newStr += str[i];
}
console.log(newStr);
