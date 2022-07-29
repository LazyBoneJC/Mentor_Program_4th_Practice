// hw2：最後的考驗
const request = require("request");
const args = process.argv;
const API_ENDPOINT = "https://lidemy-book-store.herokuapp.com";

const action = args[2];
const params = args[3];

switch (action) {
  case "list":
    listBooks();
    break;
  case "read":
    readBook(params);
    break;
  case "delete":
    deleteBook(params);
    break;
  case "create":
    createBook(params);
    break;
  case "update":
    updateBook(params, args[4]);
    break;
  default:
    console.log("Available commands: list, read, delete, create and update.");
}

// 印出前二十本書的 id 與書名
function listBooks() {
  request.get(`${API_ENDPOINT}/books?_limit=20`, function (err, res, body) {
    if (err) {
      return console.log("抓取失敗", err);
    }
    let data = JSON.parse(body);
    for (let i = 0; i < data.length; i++) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  });
}

// 輸出 id 為 ? 的書籍
function readBook(id) {
  request.get(`${API_ENDPOINT}/books/${id}`, function (err, res, body) {
    if (err) {
      return console.log("抓取失敗", err);
    }
    let data = JSON.parse(body);
    console.log(data);
  });
}

// 刪除 id 為 ? 的書籍
function deleteBook(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, function (err, res, body) {
    if (err) {
      return console.log("刪除失敗", err);
    }
    console.log("刪除成功！");
  });
}

// 新增一本名為 I love coding 的書
function createBook(name) {
  request.post(
    {
      url: `${API_ENDPOINT}/books`,
      form: { name },
    },
    function (err, res) {
      if (err) {
        return console.log("新增失敗", err);
      }
      console.log("新增成功！");
    }
  );
}

// 更新 id 為 1 的書名為 new name
function updateBook(id, name) {
  request.patch(
    {
      url: `${API_ENDPOINT}/books/${id}`,
      form: { name },
    },
    function (err, res) {
      if (err) {
        return console.log("更新失敗", err);
      }
      console.log("更新成功！");
    }
  );
}
