// 練習四：寫一個能回傳 n 個 * 的函式

// 請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。
// star(1) 會回傳 *
// star(5) 會回傳 *****

// 所以 console.log(star(5)) 的預期輸出是：
// *****

function star(num) {
  let stars = "";
  for (let i = 1; i <= num; i++) {
    stars += "*";
  }
  return stars;
}

console.log(star(10));
