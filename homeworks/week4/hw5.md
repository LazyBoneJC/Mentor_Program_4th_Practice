## 請以自己的話解釋 API 是什麼

API 就是一個讓雙方互不干擾，能互相交換資料的介面

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://walter-restaurant.com

| 說明             | Method | path      | 參數                 | 範例             |
| ---------------- | ------ | --------- | -------------------- | ---------------- |
| 回傳所有餐廳資料 | GET    | /data     | \_limit:限制回傳數量 | /data?\_limit=20 |
| 回傳單一餐廳資料 | GET    | /data/:id | 無                   | /data/10         |
| 刪除餐廳         | DELETE | /data/:id | 無                   | 無               |
| 新增餐廳         | POST   | /data     | name: 餐廳名稱       | 無               |
| 更改餐廳         | PATCH  | /data/:id | name: 餐廳名稱       | 無               |
