// 練習十：回傳陣列總和
// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。

// sum([1, 2, 3]) 預期回傳值：6

// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// [JS101] 講解提到的另一個做法：用 .reduce()
function sum2(arr) {
  return arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}

console.log(sum2([1, 2, 3]));
console.log(sum2([-1, 1, 2, -2, 3, -3]));
