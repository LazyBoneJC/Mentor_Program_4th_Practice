// 練習八：大小寫互換
// 請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串。

function swap(str) {
  // 使用 split, map, join
  return str
    .split("")
    .map(function (char) {
      // Ternary
      return char >= "a" && char <= "z"
        ? char.toUpperCase()
        : char.toLowerCase();
      // if (char >= "a" && char <= "z") {
      //   return char.toUpperCase();
      // }
      // return char.toLowerCase();
    })
    .join("");

  // let newStr = "";

  // ASCII 直覺的寫法
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] >= "a" && str[i] <= "z") {
  //     newStr += String.fromCharCode(str[i].charCodeAt(0) - 32);
  //     // newStr += str[i].toUpperCase();
  //   } else if (str[i] >= "A" && str[i] <= "Z") {
  //     newStr += String.fromCharCode(str[i].charCodeAt(0) + 32);
  //     // newStr += str[i].toLowerCase();
  //   } else {
  //     newStr += str[i];
  //   }
  // }

  // return newStr;
}

console.log(swap("Peter"));
console.log(swap("AbCdE"));
