// 題目說明請參考：
// https://github.com/Lidemy/mentor-program-4th/issues/16

export class Robot {
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
      this.y++;
    } else if (direction === "S") {
      this.y--;
    } else if (direction === "E") {
      this.x++;
    } else if (direction === "W") {
      this.x--;
    }
  }
}

export function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function memoize(fn) {
  let cached = {};
  return function (num) {
    if (!cached[num]) {
      cached[num] = fn(num);
    }
    return cached[num];
  };
}
