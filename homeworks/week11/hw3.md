## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

加密可以解密，但雜湊不能還原。因為 DB 被駭之後，使用者密碼就會直接洩漏，所以密碼先經過 hash function 再存到 DB 中，就能大大降低使用者的風險。

## `include`、`require`、`include_once`、`require_once` 的差別

include:

* 如果遇到錯誤，會出現 warning message，但程式依然會繼續往下執行。
* 若主程式使用 include 來引入檔案，主程式呼叫一次include()，就會立即引入一次，主程式呼叫 100 次，該檔案就會被引入100 次，

require:

* If error, require will produce a fatal error, and stop the script.
* 將檔案引入主要程式碼內，也就是說引入的檔案為主程式的一部分。

include_once, require_once:

* 功用跟上面兩個大同小異，差別在 Include_once 和 require_once 只會引入檔案一次，可以避免重複引入造成變數重複宣告的問題。

參考資料：https://ithelp.ithome.com.tw/articles/10238540

## 請說明 SQL Injection 的攻擊原理以及防範方法

攻擊原理：把原本的 sql query 截斷，注入惡意的 sql query, 變成一個截然不同的意思。

防範方法：使用 prepared statement

## 請說明 XSS 的攻擊原理以及防範方法

攻擊原理：利用網頁上任何可以輸入的地方，輸入惡意的程式碼，例如 `<script>alert(document.cookie);</script>`，cookie 裡面的 session id 就會外洩。

防範方法：對字串做特殊處理，php 是用 htmlspecialchars()

## 請說明 CSRF 的攻擊原理以及防範方法

攻擊原理：在不同的 domain 底下，偽造使用者本人發出的 Request。最常見的就是釣魚網站，使用者在點進去之後，攻擊者利用隱藏的 img 或 form 去讓使用者在不知情的情況下發送 Request，因為是從使用者的瀏覽器發出的，所以 Request header 當然就會夾帶使用者本身的資訊。

防範方法：使用者本身如果每次都記得把帳號登出，就會是一個防禦的方法，但主要還是要靠 Server side 去做防禦。

* 第一個方式是檢查 Request header 裡面帶的一個欄位叫 referer，代表這個 Request 是從哪個地方來的，可以檢查這個欄位是不是合法的 domain，不是就 reject 掉即可，但有些瀏覽器並不會帶 referer，有些使用者也會把自動帶 referer 這個功能關掉，第三個是檢查 domain 合法性的程式不能有錯，所以檢查 referer 並不是一個很完善的作法。
* 第二個方式就是加上圖形或簡訊驗證碼，也就是2FA ( Two-factor authentication )，這個做法很完善，但就是有點麻煩，使用者不會希望每刪除一篇留言就要輸入一次驗證碼。
* 第三個做法是加上 CSRF token。我們在 form 裡面加上一個 hidden 的欄位，叫做 csrftoken，裡面的值由 server 隨機產生，並存在 server 的 session 中。按下 submit 後，server 比對表單中的 csrftoken 是否和 session 裡面存的值一樣，是的話就代表是使用者本人發的 request。因為攻擊者不知道也猜不出來 csrftoken 是多少，所以自然無法攻擊。可是有另一種情況，假設你的 server 支持 cross origin 的 request，攻擊者就可以發 request 拿到一組 csrftoken 進行攻擊。不過前提是你的 server 接受攻擊者 domain 的 request。
* 第四個方法是 Double Submit Cookie，上一種方法需要 server 的 state，也就是需要把 csrf token 存在 server 中，才能驗證正確性，現在這個方法的好處就是不需要用到 server 儲存的東西。這個解法的一樣是由 server 隨機產生一組 token 並加在 form 上面，但不一樣的是，除了不用寫在 session 裡，client side 會再設定一組名為 csrftoken 的 cookie。這個方法的原理就是要區分 request 是不是相同的 domain 來的，因為瀏覽器的限制，駭客並不能在自己的 domain 設定目標網頁的 cookie，所以他發上來的 request header 就不會有 csrftoken，就會被擋掉。但這個方法也有一些風險，如果駭客掌握了你底下的 任何一個 subdomain，就可以幫你寫 cookie，並且順利攻擊了。
* Double Submit Cookie 的核心概念：『攻擊者無法讀寫目標網站的 cookie，所以 request 的 csrf token 會跟 cookie 內的不一樣。』
* 第五個方法 Browser 本身的防禦：Same Site Cookies。
