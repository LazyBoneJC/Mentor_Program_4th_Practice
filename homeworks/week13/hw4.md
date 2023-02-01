## Webpack 是做什麼用的？可以不用它嗎？

Webpack 是一個打包工具，將眾多的模組和資源打包成一個檔案，並編譯我們需要預先處理的內容，變成瀏覽器看得懂的東西，讓我們可以上傳到伺服器。

可以不用，但就會有許多套件不能使用，以及開發效率下降，因為 webpack 很方便好用，除了打包之外，還能藉由許多 plugin 和 loader 做很多事，例如載入 JS 時順便做 uglify、載入 CSS 順便做 minify 等等。

因為瀏覽器原生的模組機制會碰到許多問題（相容性、無法兼容 npm 等等），所以我們才需要一個額外的工具。

即使現在瀏覽器有 ES6 的 import 和 export，但因為支援度不好、需要引入其他第三方模組化套件來實作專案，而其他套件又不被瀏覽器支援，所以就需要用 webpack 來打包轉換，才能在瀏覽器上面執行。

## gulp 跟 webpack 有什麼不一樣？

* 這兩個工具的本質就不同，gulp 是一個 task manager，而 webpack 是 bundle。
* gulp 本身只能夠管理 task，而 task 都是使用者自己寫或是用 plugin。
* Webpack 則是一個打包工具，打包過程中可以使用各種 loader(babel, scss…)，功能跟 gulp 很像，但本質是完全不同的。

## CSS Selector 權重的計算方式為何？

1. 計算 ID 選擇器的數量（設想為變數 a）
2. 計算 Class 與 Attributes 選擇器（包含 Pseudo Class）的數量（設想為變數 b）
3. 計算標籤選擇器的數量（設想為變數 c）
4. 將 a、b、c 串接在一起，即可得到權重
5. 例子：

```css
*               /* a=0 b=0 c=0 -> 權重 =   0 */
LI              /* a=0 b=0 c=1 -> 權重 =   1 */
UL LI           /* a=0 b=0 c=2 -> 權重 =   2 */
UL OL+LI        /* a=0 b=0 c=3 -> 權重 =   3 */
H1 + *[REL=up]  /* a=0 b=1 c=1 -> 權重 =  11 */
UL OL LI.red    /* a=0 b=1 c=3 -> 權重 =  13 */
LI.red.level    /* a=0 b=2 c=1 -> 權重 =  21 */
#x34y           /* a=1 b=0 c=0 -> 權重 = 100 */
#s12:not(FOO)   /* a=1 b=0 c=1 -> 權重 = 101 */
```

**總結：!important > inline styles > ID 選擇器 > Class 選擇器 > Html 標籤選擇器**
