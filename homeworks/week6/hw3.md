## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

1. `<form>`
2. `<input>`
3. `<label>`

## 請問什麼是盒模型（box modal）

當我們提到 CSS box model, 就離不開 design 和 layout.

所有 html 元素都可以當作是一個個 box, 而 box model 由內而外是 content, padding, border, margin.

\*重點：許多人喜歡加上 { box-sizing: border-box; }，因為實際上寫出來的 height 和 width 常會和設計稿中的不同，所以用 border-box 可以確保長寬都跟預想中的一樣。

[W3C - Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

1. **inline** : inline element 不會換行，並且不能調整寬高、上下邊距(margin, padding)，會根據內容而定。(An inline element does not start on a new line and only takes up as much width as necessary.) (e.g. `<span>, <a>, <img>, etc.`)
2. **block** : A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can). (e.g. `<div>, <p>, <h1>, <form>, etc.`)
3. **imline-block** : 同時擁有 inline 和 block 的特性，不會換行，同時又可以像 block 調整 width & height
4. [W3S - display](https://www.w3schools.com/css/css_display_visibility.asp)

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

1. **Static** : **position 預設就是 static**, static 不受 top, right, left, bottom 這些 properties 影響, 然後 position 永遠遵照 normal flow of the page 去編排
2. **Relative** : 根據原本的定位點, 可以用 top, right, left, bottom 去調整位置。其他元素不會被影響到。
3. **Absolute** : 根據上一層不是 static 的元素當參考點，如果找不到，就會以 body 當參考點。若一個元素使用了 absolute, 會很像是被抽離原本的排版，變成是置身在一個獨立的象限之中。( **absolute 的定位點是往上找第一個 position 不是 static 的元素** )
4. **Fixed** : is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element. 相對 View port 去做定位，怎麼滾動都不會改變位置。
