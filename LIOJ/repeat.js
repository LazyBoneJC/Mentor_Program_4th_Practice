// 實作 repeat()

let str = "abc";

function repeat(str, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

console.log(repeat(str, 3));
