// 練習一：排序
// 請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
// 提示：如果你已經會找第 n 小的值了，試著把這個概念應用到這題上。

// sort([ 6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]
// sort([ 1, 2, 7 ,5]) 預期回傳值：[1, 2, 5, 7]

function sort(arr) {
  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  return arr;
}

console.log(sort([6, 8, 3, 2]));
console.log(sort([1, 2, 7, 5]));
