// 找最大值

// Pseudo Code :
// let arr = 輸入的陣列
// let max = arr[0]
// for(i from 0 to arr.length - 1) do
//   if(arr[i] > max) do
//     max = arr[i]
//   end if
// end for
// print max

let arr = [3, 2, 4, 8, 14, 1, 4, 76, 87];
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);
