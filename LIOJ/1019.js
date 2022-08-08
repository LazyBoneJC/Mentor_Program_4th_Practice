var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
});

var lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on("line", function (line) {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on("close", function () {
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  let tmp = lines[0].split(" ");
  let width = Number(tmp[0]);
  let height = Number(tmp[1]);
  let maze = [];
  for (let i = 1; i < lines.length; i++) {
    maze.push(lines[i].split(""));
  }
  // console.log("W:", width, "H:", height);
  // console.log(maze);

  // 終點在右下方，一定是往下或往右找路徑
  // let location = [0, 0];
  let x = 0;
  let y = 0;
  let step = 0;
  let isEnd = true;
  while (isEnd) {
    // 先檢查下面，再檢查右邊
    if (x < height - 1 && maze[x + 1][y] === ".") {
      x++;
      step++;
      // console.log("X:", x, "Y:", y);
    }

    if (maze[x][y + 1] === ".") {
      y++;
      step++;
      // console.log("X:", x, "Y:", y);
    }

    // 檢查是否到終點
    if (x === height - 1 && y === width - 1) {
      isEnd = false;
    }
  }
  console.log(step);
}
