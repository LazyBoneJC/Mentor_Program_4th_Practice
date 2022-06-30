// 質數定義：只有 1 跟 自己 能夠整除自己

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(29));
