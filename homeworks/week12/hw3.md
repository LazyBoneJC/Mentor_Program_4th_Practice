## 請簡單解釋什麼是 Single Page Application

SPA ( Single-Page-Application ) 單頁式應用程式：透過 Ajax 以非同步的方式去跟後端 Server API 要資料， 再以 JavaScript 動態修改網站上變動的內容（不同的頁面輸出相同的結果），而非傳統的透過伺服器重新載入整個新的頁面（不同的頁面輸出不同的結果），這種方式避免了頁面之間的切換打斷使用者體驗，讓網頁用起來更像 Native App 的感覺。

## SPA 的優缺點為何

優點：

(1) 良好的使用體驗。網頁首次載入後的所有內容的改變都不需要刷新整個網頁，讓使用者在使用網頁也能夠體驗到 native app 的順暢體驗。

(2) 前後端工作分離。前端可以專心寫前端，資料部分就由後端的 API 來，有助於分離用戶端和 server 端的工作、API 也能通用化。

缺點：

(1) 如果是 Client Side Rendering 的話，SEO 會很差，因為網頁內容全由 JS 動態產生，檢視原始碼會沒有什麼內容，只有一些基本的 tag 跟 JS 檔案，搜尋引擎看不懂，只有透過瀏覽器載入網站、執行 JS 之後，等 Response 回來才會動態產生出內容。

(2) 後端的一部分職責就會變成前端在做，例如狀態管理＆路由，前端也會變得複雜許多。

(3) 首次 Loading 的速度較慢，SPA 通常一開始就會先將需要用到的 html, css, js 檔案全部載入，可以利用 cache 或是 lazy loading 的方式改善，需要使用到的 component 才載入。

## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？

差別：一個是透過 JS 動態修改網頁內容 ( 網頁不需要刷新 )，一個是 Server 處理好再整個丟過來 ( 網頁會整個刷新 )。

透過後端直接輸出內容：前端透過 Form POST 傳資料到 Server，Server 處理完再 Redirect 回去原本/新的頁面（在載入之前都會顯示全白的畫面）

前後端分離的寫法：前端一開始是只有一些基本的 tag 跟 JS 檔案的，透過 Ajax 去跟 Server API 拿資料，等 Response 回來後再透過 JS 動態改變前端內容。

＊ SSR (Server side randering) vs CSR (Client side rendering)
