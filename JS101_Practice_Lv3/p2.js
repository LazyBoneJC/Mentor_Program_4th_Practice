// 練習二：壓平陣列
// 請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列。

// flatten([1, 2, 3]) 預期回傳值：[1, 2, 3]
// flatten([1, 2, [1, 2], [1, 3], 6]) 預期回傳值：[1, 2, 1, 2, 1, 3, 6]
// flatten([1, [2, [3, [4]], 5], 6]) 預期回傳值：[1, 2, 3, 4, 5, 6]

function flatten(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3]));
console.log(flatten([1, 2, [1, 2], [1, 3], 6]));
console.log(flatten([1, [2, [3, [4]], 5], 6]));
