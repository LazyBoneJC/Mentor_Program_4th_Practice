// Unit4.7：實戰：印出 1-100 的平方數
let max = 100;

function printSquare() {
  for (let i = 1; i <= max; i++) {
    if (isSquare2(i)) {
      console.log(i);
    }
  }
}

// My Method
function isSquare(num) {
  for (let i = 1; i <= max; i++) {
    let squareNum = i * i;
    if (num === squareNum) {
      return true;
    }
  }
  return false;
}

// Huli Teacher's Method
// 利用 Math.sqrt()平方根 & Math.floor()地板函數
// e.g. Math.floor(Math.sqrt(10)) => 3 => 3 * 3 != 10
function isSquare2(num) {
  let root = Math.floor(Math.sqrt(num));
  return root * root === num;
}

printSquare();
