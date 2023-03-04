## hw1：Event Loop

在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

輸出：1, 3, 5, 2, 4

一開始 `console.log(1)` 會放到 call stack, 執行完畢，就 pop 出去。-> print 1

再來是 `setTimeout()`，等待 `setTimeout()` 結束，時間到之後 call back function `() => { console.log(2) }` 就會被放到 callback queue 等待執行。

再來 `console.log(3)` 會放到 call stack, 執行完畢，就 pop 出去。-> print 3

再來是 `setTimeout()`，等待 `setTimeout()` 結束，時間到之後 call back function 就會被放到 callback queue 等待執行。

再來 `console.log(5)` 會放到 call stack, 執行完畢，就pop 出去。-> print 5

等到 call stack 都清空了之後，callback queue 裡面的 cb function 才會執行，先 print 2，再 print 4。
