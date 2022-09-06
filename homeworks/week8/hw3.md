## 什麼是 Ajax？

全名 **Asynchronous(非同步) JavaScript And XML**，並非指某種特定的技術，任何一種非同步與 Server 交換資料的 JS 都可以算是 AJAX

## 用 Ajax 與我們用表單送出資料的差別在哪？

最大的差別在於使用 AJAX 發出 Request，當有 Response 回來時會直送我們的 JS，瀏覽器只會協助轉傳資料，並不會干預。

## JSONP 是什麼？

**JSONP (JSON with padding)** - 利用 script tag 來存取外部資料的一種方式，因為 script tag 並不受到 Same Origin Policy 影響，可以跨網域存取，但存在資安問題，因為是使用別人的 script，所以不建議使用 JSONP。

## 要如何存取跨網域的 API？

跟 CORS (Cross Origin Resource Sharing) 有關，目標 API 的 Header 必須加上 `Access-Control-Allow-Origin`，通常需要通過 Preflight-Request(預檢請求)，例如 Twitch API 就會需要附上某些 custom header 才能通過驗證，進而使用 API

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為這週我們要透過『瀏覽器』去發送 http request，就會受到 Same Origin Policy 管制。第四週我們透過 node.js 直接對 API 發送 request，並沒有透過瀏覽器，所以沒有網域的問題。
