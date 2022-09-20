## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

VARCHAR 跟 TEXT 一樣都是可變長度的資料型態，也就是說輸入的字符是幾個會存幾個，不會像 CHAR 一樣後面自己幫你補英文空白到符合設定的長度，但不同的是，VARCHAR 可以設置最大長度，適合用在你知道大概要用多少字的時候， TEXT 不可設置最大長度，所以 TEXT 適合用在不知道最大長度為何的屬性上，例如文章內容的長度就是不可預期的。

參考資料

1. [[iT 鐵人賽 Day6]SQL Server 資料型態 char varchar nchar nvarchar](https://ithelp.ithome.com.tw/articles/10213922)
2. [MySQL 性能優化之 char、varchar、text 的區別](https://www.twblogs.net/a/5c126982bd9eee5e40bb4de6)

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

1. Cookie 是一種暫存在瀏覽器上的檔案，儲存使用者相關資訊，讓 web server 可以從 cookie 的資訊去做一些應用，例如識別使用者身份、存購物車有哪些產品等等的。
2. 當我們透過後端程式回傳 `Set-Cookie: user_id = 1` 類似這樣的 response header，瀏覽器就會幫我們設定 cookie ( user_id = 1 )。
3. 當我們設定好了 cookie，之後在訪問相同路徑、cookie 還沒過期的狀況下，瀏覽器在對 server 發出 request 時，都會在 request header 幫我們帶上 cookie 相關資訊。

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

1. 測試新增留言的途中發現一個問題，就是 sql query 在 INSERT 後面的 VALUES 的時候，如果在字串內加入 ’ (apostrophe)，例如 I’m…，也就是一撇的符號，就會出現錯誤，或許有導致 SQL Injection 的風險，因為就可以截斷原本的 query string，後面再加上其他的程式碼．
2. 因為我們提供使用者輸入留言，凡事使用者能跟網站互動的地方，都有 XSS（Cross-Site Scripting） 的風險。
