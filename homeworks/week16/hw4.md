## hw4：What is this?

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // [value:2, hello:function()...]
obj2.hello() // [value:2, hello:function()...]
hello() // undefined
```

『 this 的值跟作用域跟程式碼的位置在哪裡完全無關，只跟「你如何呼叫」有關 』

可以轉成 `call()` 來看：

obj.inner.hello() -> obj.inner.hello.call( obj.inner )

obj2.hello() -> obj2.hello.call(obj2) -> obj2.hello.call(obj.inner)

hello() -> hello.call()
