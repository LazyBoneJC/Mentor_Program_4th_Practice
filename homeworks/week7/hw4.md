## 什麼是 DOM？

DOM (Document Object Model) ：簡單來說是把 Document (HTML 文件) 轉換成 Object，讓我們能透過 JS 去更改瀏覽器上的東西，例如改變 HTML 結構、新增刪除節點、新增事件等等。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

DOM 的事件在傳播時，會先由根節點傳至 `target`，這邊如果有加入事件的話，就會處於所謂的 捕獲階段 (Capturing Phase)。

`target` 就是你點擊的目標，這時候 `target` 身上的 `eventListener` 會是在一個 `AT_TARGET` 的階段。

最後，事件再由子節點 (Target) 一路逆向傳至根節點，這個階段稱為 冒泡階段 (Bubbling Phase)。

## 什麼是 event delegation，為什麼我們需要它？

Event Delegation 事件代理：舉一個簡單的例子，如果今天我們有一個 `ul` 底下有 10 個 `li`，那我們幫每一個 `li` 加 `eventListener` 去監聽是否有 click 事件發生，好像不會太費工夫，但如果底下有 1000 個怎麼辦？這就是 event delegation 可以實際應用上的情形了。

我們可以在 `ul` 加上一個 `eventListener` 去監聽 click 事件即可，因為根據 DOM 的事件傳遞機制，所有 `ul` 內的 `li` 的點擊事件都會網上傳回到根節點，其中就會經過 `ul`，這時就能發揮相同的效果，但少寫非常多的 function。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

`event.preventDefault()` 會取消事件的預設行為，但事件仍會繼續傳遞下去。

`event.stopPropagation()` 會停止事件的傳遞。

舉個例子，今天我們想監聽表單的 submit 事件，若我們使用 `preventDefault()`，當我們 submit 時，表單將會取消預設的提交動作，頁面就不會刷新，但這個 submit 的事件還是會繼續傳回根節點。

若我們使用 `stopPropagation()`，表單在 submit 時還是會提交並刷新，但這個 submit 的事件就僅僅停留在 `target`，不會再繼續傳遞回根節點。
