## hw3：Hoisting

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```js
var a = 1
function fn(){
  console.log(a) // a hoisting: undefined
  var a = 5
  console.log(a) // 5
  a++ // a = 6
  var a // 不起作用，已經有 a
  fn2()
  console.log(a) // 20
  function fn2(){ // 沒有宣告 a，所以往上一層找 a
    console.log(a) // 6
    a = 20 // a = 20
    b = 100 // 因為 b 不存在，會直接被宣告在 global (100)
  }
}
fn()
console.log(a) // 1
a = 10
console.log(a) // 10
console.log(b) // 100
```

fn2 EC.VO {

}

fn EC.VO {

a: undefined, -> 5 -> 6 -> 20

fn2: function,

}

global EC.VO {

a: 1, -> 10

fn: function,

b: 100,

}
