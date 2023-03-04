class Robot {
  constructor(init_x, init_y) {
    // 初始化 (x, y) 座標
    this.x = init_x;
    this.y = init_y;
  }
  getCurrentPosition() {
    return {
      x: this.x,
      y: this.y,
    };
  }
  go(direction) {
    if (direction === "N") {
      this.y += 1;
    } else if (direction === "S") {
      this.y -= 1;
    } else if (direction === "E") {
      this.x += 1;
    } else if (direction === "W") {
      this.x -= 1;
    }
  }
}

let robot = new Robot(10, 10);
console.log(robot.getCurrentPosition());
robot.go("N");
console.log(robot.getCurrentPosition());