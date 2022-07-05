// 練習三：寫一個能夠印出 n 個 * 的函式

// 寫一個函式 star，接收一個參數 n，並印出 n 個 *
// （禁止使用內建函式 repeat）

// star(1) 預期輸出：
// *

// star(5) 預期輸出：
// *****
// star(10) 預期輸出：
// **********

function star(num) {
  let stars = "";
  for (let i = 1; i <= num; i++) {
    stars += "*";
  }
  console.log(stars);
}

star(1);
