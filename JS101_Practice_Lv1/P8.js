// 練習八：回傳陣列裡面所有小於 n 的數的總和
// 請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。

// findSmallerTotal([1, 2, 3], 3) 正確回傳值：3
// findSmallerTotal([1, 2, 3], 1) 正確回傳值：0
// findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值：25
// findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值：0

// 最直覺的作法
function findSmallerTotal(arr, num) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      total += arr[i];
    }
  }
  return total;
}

// 練習利用 filter() 與 reduce()
function findSmallerTotal2(arr, num) {
  let arrFiltered = arr.filter(function (item) {
    return item < num;
  });
  return arrFiltered.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}

console.log(findSmallerTotal2([1, 2, 3], 3));
console.log(findSmallerTotal2([1, 2, 3], 1));
console.log(findSmallerTotal2([3, 2, 5, 8, 7], 999));
console.log(findSmallerTotal2([3, 2, 5, 8, 7], 0));
