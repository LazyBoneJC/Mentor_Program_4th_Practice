function transform(arr, transformFunction) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(transformFunction(arr[i]));
  }
  return result;
}

let double = function (x) {
  return x * 2;
};

function triple(x) {
  return x * 3;
}

// * anonymous function 匿名函式 *
console.log(
  transform([1, 2, 3], function (x) {
    return x * 4;
  })
);
