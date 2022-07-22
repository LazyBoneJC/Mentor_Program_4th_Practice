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

function findNthMin(arr, nth) {
  for (let i = 1; i <= nth - 1; i++) {
    var minIndex = findMinIndex(arr);

    // ！重點 使用 splice(index, 要刪除的元素個數)
    // arr.splice(minIndex, 1);

    // 或是使用 filter()
    arr = arr.filter(function (item, index) {
      return index !== minIndex;
    });
  }
  var realMinIndex = findMinIndex(arr);
  return arr[realMinIndex];
}

console.log(findMinIndex([1, 2, 3, 4, 5]));
console.log(findNthMin([1, 2, 3, 4, 5], 2));
console.log(findNthMin([1, 3, 5, 3, 1], 3)); // 用此測資會有錯，代表這個方法有缺陷，無法排除重複的數值
