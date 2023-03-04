## hw2：Event Loop + Scope

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```

callback queue: 0, 1, 2, 3, 4

輸出：i: 0, i: 1, i: 2, i: 3, i: 4, 0, 1, 2, 3, 4
