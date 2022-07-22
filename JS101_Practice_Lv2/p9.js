// 練習九：找出最小值
// 請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）

// findMin([1, 2, 5, 6, 99, 4, 5]) 預期回傳值：1
// findMin([1, 6, 0, 33, 44, 88, -10]) 預期回傳值：-10

function findMin(arr) {
  // --- My Method ---
  // 會比較快 因為每個元素只比較過一次
  // let min = Infinity;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] < min) {
  //     min = arr[i];
  //   }
  // }
  // return min;

  // --- Huli's Method ---
  // 使用 .filter() 過濾 Array 中的元素
  // 但會比較慢 因為每個元素都會重複比較一次
  for (let i = 0; i < arr.length; i++) {
    if (isSmallest(arr, arr[i])) {
      return arr[i];
    }
  }
}

function isSmallest(arr, num) {
  return (
    arr.filter(function (item) {
      return item < num;
    }).length === 0
  );
}

console.log(findMin([1, 2, 5, 6, 99, 4, 5]));
console.log(findMin([1, 6, 0, 33, 44, 88, -10]));
