// 練習二：好多星星 回傳版
// 請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串

function makeStars(n) {
  let str = "";
  let arr = [];

  // 字串方法
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 0; j < i; j++) {
  //     str += "*";
  //   }
  //   if (i !== n) {
  //     str += "\n";
  //   }
  // }

  // 使用 array.join()
  for (let i = 1; i <= n; i++) {
    arr.push(star(i));
  }

  return arr.join("\n");
}

console.log(makeStars(3));

function star(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += "*";
  }
  return result;
}
