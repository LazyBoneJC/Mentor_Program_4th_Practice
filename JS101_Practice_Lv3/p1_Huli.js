// 練習一：排序
// 請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
// 提示：如果你已經會找第 n 小的值了，試著把這個概念應用到這題上。

// sort([ 6, 8, 3, 2]) 預期回傳值：[2, 3, 6, 8]
// sort([ 1, 2, 7 ,5]) 預期回傳值：[1, 2, 5, 7]

function findMinIndex(arr) {
  let min = arr[0];
  let minIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  return minIndex;
}

function sort(arr) {
  let newArr = [];
  let length = arr.length;
  // 要先把 arr 的 length 存起來，因為在刪除 arr 元素個過程中 arr.length 會變動，導致 for loop 少跑

  for (let i = 0; i < length; i++) {
    let minIndex = findMinIndex(arr);
    newArr.push(arr[minIndex]);
    arr.splice(minIndex, 1);
  }

  return newArr;
}

console.log(sort([6, 8, 3, 2]));
console.log(sort([1, 2, 7, 5]));
