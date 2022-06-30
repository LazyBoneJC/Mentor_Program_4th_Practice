// 練習六：回傳第一個大寫字母以及它的 index

// 請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1。

// position("abcd") 正確回傳值：-1

// position("AbcD") 正確回傳值：A 0

// position("abCD") 正確回傳值：C 2

function position(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") {
      return str[i] + " " + i;
    }
  }
  return -1;
}

console.log(position("AbcD"));
