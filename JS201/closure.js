function square(num) {
  console.log('calculate...');
  return num * num;
}

// Closure 概念：在 function 裡 return function，並且可以把值記住，類似 Java Private 的用法
function cache(func) {
  var ans = {}; // 要記住的值會存在這個 object
  return function(num) { // 回傳 function
    if(ans[num]) {
      return ans[num];
    }

    ans[num] = func(num);
    return ans[num];
  }
}

const cachedComplex = cache(square);
console.log(cachedComplex(20));
console.log(cachedComplex(20));
console.log(cachedComplex(20));