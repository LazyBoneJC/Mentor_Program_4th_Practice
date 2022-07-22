// 練習一：好多星星

function star(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

star(1);
star(3);
star(7);
