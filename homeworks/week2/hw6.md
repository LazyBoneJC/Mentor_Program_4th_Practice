```js
function isValid(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) return "invalid";
  }
  for (var i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + arr[i - 2]) return "invalid";
  }
  return "valid";
}

isValid([3, 5, 8, 13, 22, 35]);
```

## 執行流程 (判斷是否為[斐波那契數列](https://zh.m.wikipedia.org/zh-tw/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0))

1. 執行第 11 行，執行 isValid() function，將參數 [3, 5, 8, 13, 22, 35] 傳入 isValid() 的 str 中。
2. 執行第 2 行，令 i 變數是 0，檢查 i 是否小於 arr 的長度，是，繼續執行，開始進入第 1 圈迴圈。
3. 執行第 3 行，判斷 arr[ i ] 是否小於等於 0，否，第 1 圈迴圈結束，跑回第 2 行，i++，i 變成 1。
4. 執行第 2 行，檢查 i 是否小於 arr 的長度，是，繼續執行。
5. 執行第 3 行，判斷 arr[ i ] 是否小於等於 0，否，第 2 圈迴圈結束，跑回第 2 行，i++，i 變成 2。
6. ...
7. 執行第 2 行，檢查 i 是否小於 arr 的長度，是，繼續執行。
8. 執行第 3 行，判斷 arr[ i ] 是否小於等於 0，否，第 6 圈迴圈結束，跑回第 2 行，i++，i 變成 6。
9. 執行第 2 行，檢查 i 是否小於 arr 的長度，否，跳出迴圈，到第 5 行。
10. 執行第 5 行，令 i 變數是 2，檢查 i 是否小於 arr 的長度，是，繼續執行，開始進入第 1 圈迴圈。
11. 執行第 6 行，判斷 arr [ i ] 是否不等於 arr [ i - 1 ] + arr [ i - 2 ]，否
12. 第 1 圈迴圈結束，i++，i 變成 3，跳回第 5 行。
13. 執行第 5 行，檢查 i 是否小於 arr 的長度，是，繼續執行，開始進入第 2 圈迴圈。
14. 執行第 6 行，判斷 arr [ i ] 是否不等於 arr [ i - 1 ] + arr [ i - 2 ]，否
15. 第 2 圈迴圈結束，i++，i 變成 4，跳回第 5 行。
16. 執行第 5 行，檢查 i 是否小於 arr 的長度，是，繼續執行，開始進入第 3 圈迴圈。
17. 執行第 6 行，判斷 arr [ i ] 是否不等於 arr [ i - 1 ] + arr [ i - 2 ]，是，回傳 "invalid"
18. 執行完畢