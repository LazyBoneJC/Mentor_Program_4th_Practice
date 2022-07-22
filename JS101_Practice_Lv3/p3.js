// 練習三：印出聖誕樹
// 請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹

function tree(n) {
  for (let i = 1; i <= n; i++) {
    let str = repeat(" ", n - i) + repeat("*", 2 * i - 1);
    console.log(str);
  }
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      let str = repeat(" ", n - 1) + repeat("*", 1);
      console.log(str);
    }
  }
}

function repeat(str, times) {
  let newStr = "";
  for (let i = 0; i < times; i++) {
    newStr += str;
  }
  return newStr;
}

tree(2);
tree(5);

// 樹
// 2i - 1 顆 星星
// n - i 個 空格

// 樹幹
// n 列 *
// n - 1 個 空格

// tree(2)
// _*
// ***
// _*
// _*

// tree(5)
// ____*
// ___***
// __*****
// _*******
// *********
// ____*
// ____*
// ____*
// ____*
// ____*
