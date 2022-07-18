// 判斷是否為等差數列

function isArithmeticSequence(arr) {
  // edge case: 若傳入空陣列、只有一個元素的陣列
  if (arr.length <= 1) return true; // 涵蓋 0, 1 兩個 case

  let d = arr[1] - arr[0]; //先算出公差

  for (let i = 1; i < arr.length; i++) {
    if (!(arr[i] - arr[i - 1] === d)) {
      return false;
    }
  }
  return true;
}

console.log(isArithmeticSequence([1, 2, 3, 4, 5]));
console.log(isArithmeticSequence([1, 3, 5, 7, 9]));
console.log(isArithmeticSequence([3]));
console.log(isArithmeticSequence([]));
