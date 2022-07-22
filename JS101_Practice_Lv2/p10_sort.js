// 練習十：找出第 n 小的值
// 這題是上一題的加強版，上一題只要你找出最小值，而這一題請你寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）
// 提示：假設我要找出第 2 小的值，我只要先找出最小的值然後再把它刪掉，再重新找一次最小的值，就會是第 2 小的值了。

function findNthMin(arr, n) {
  // Bubble Sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        let tmp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tmp;
      }
    }
  }
  console.log(arr);

  for (let i = 1; i < n; i++) {
    if (arr[arr.length - 2] === arr[arr.length - 1]) {
      while (arr[arr.length - 2] === arr[arr.length - 1]) {
        arr.pop();
      }
    }
    arr.pop();
    console.log("pop:", arr);
  }

  return arr[arr.length - 1];
}

// console.log(findNthMin([1, 2, 3, 4, 5], 1));
// console.log(findNthMin([1, 3, 5, 7, 9], 3));
console.log(findNthMin([1, 1, 1, 2, 2, 3, 3, 1, 1], 2));
