// 實作簡易版 map()

let arr = [1, 2, 3];

function double(n) {
  return n * 2;
}

function map(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = callback(arr[i]);
  }
  return result;
}

console.log(map(arr, double));
