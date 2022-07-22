// 練習四：判斷圈圈叉叉勝負
// 請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw。

function winner(arr) {
  // check row
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      // console.log("ckeck row");
      return arr[i][0];
    }
  }

  // check column
  for (let i = 0; i < arr.length; i++) {
    if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
      // console.log("ckeck column");
      return arr[0][i];
    }
  }

  // check x
  if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
    // console.log("ckeck x1");
    return arr[0][0];
  }

  if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
    // console.log("ckeck x2");
    return arr[0][2];
  }

  return "draw";
}

console.log(
  winner([
    ["O", "O", "X"],
    ["O", "X", "X"],
    ["O", "X", "O"],
  ])
);

console.log(
  winner([
    ["O", "O", "X"],
    ["O", "X", "X"],
    ["X", "X", "O"],
  ])
);

console.log(
  winner([
    ["O", "O", "X"],
    ["O", "O", "X"],
    ["X", "X", ""],
  ])
);
