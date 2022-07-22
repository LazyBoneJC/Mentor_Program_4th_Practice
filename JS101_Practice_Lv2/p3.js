// 練習三：好多星星 加強版
// 請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形。

function stars2(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
  for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

stars2(5);
