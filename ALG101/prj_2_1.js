// 找次小值

let arr = [10, 8, 6];
let min = Infinity;
let min2 = Infinity;

for (let i = 0; i < arr.length; i++) {
  // console.log("i = ", i);
  if (arr[i] < min) {
    min2 = min;
    min = arr[i];
    // console.log("min: " + min + ", min2: " + min2);
  } else if (arr[i] < min2) {
    min2 = arr[i];
    // console.log("min: " + min + ", min2: " + min2);
  }
}

console.log("Ans:", min2);

// 人體編譯器
// 宣告 arr: [10, 8, 6]
// min: Infinity, min2: Infinity
// for loop (i from 0 to arr.length - 1) 遍歷整個 arr array

// i: 0
// 判斷 arr[i](10) < min(Infinity) ? 是, min assign 給 min2 (min2: Infinity)
// min = arr[0], (min: 10)

// i: 1
// 判斷 arr[i](8) < min(10) ? 是, min2: 10
// min = arr[1], (min: 8)

// i: 2
// 判斷 arr[i](6) < min(8) ? 是, min2: 8
// min = arr[2], (min: 6)

// print ans min2: 6
