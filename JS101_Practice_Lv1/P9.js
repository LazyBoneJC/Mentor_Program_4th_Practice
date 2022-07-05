// 練習九：回傳陣列裡面所有小於 n 的數
// 請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。

// findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]

// findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
// findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]

// 直覺的作法
let findAllSmall = (arr, num) => {
  let arrSmall = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      arrSmall.push(arr[i]);
    }
  }
  return arrSmall;
};

// 使用 .filter()
let findAllSmall2 = (arr, num) => {
  return arr.filter(function (item) {
    return item < num;
  });
};

console.log(findAllSmall2([1, 2, 3], 10));
console.log(findAllSmall2([1, 2, 3], 2));
console.log(findAllSmall2([1, 3, 5, 4, 2], 4));
