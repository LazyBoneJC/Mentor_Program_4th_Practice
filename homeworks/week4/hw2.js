// hw2：最後的考驗
const request = require("request");
const process = require("process");

// console.log(process.argv);
let action = process.argv[2];

// 印出前二十本書的 id 與書名
function listBooks() {
  request.get(
    `https://lidemy-book-store.herokuapp.com/books?_limit=20`,
    function (error, response, body) {
      let json = JSON.parse(body);
      for (let i = 0; i < json.length; i++) {
        console.log(json[i].id, json[i].name);
      }
    }
  );
}

// 輸出 id 為 ? 的書籍
function readBook(id) {
  request.get(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    function (error, response, body) {
      let json = JSON.parse(body);
      console.log(json.name);
    }
  );
}

// 刪除 id 為 ? 的書籍
function deleteBook(id) {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${id}`,
    function (error, response, body) {
      console.log(response.statusCode);
    }
  );
}

// 新增一本名為 I love coding 的書
function createBook(name) {
  request.post(
    {
      url: `https://lidemy-book-store.herokuapp.com/books`,
      form: { name: name },
    },
    function (error, response, body) {
      console.log(body);
    }
  );
}

// 更新 id 為 1 的書名為 new name
function updateBook(id, name) {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${id}`,
      form: { name: name },
    },
    function (error, response, body) {
      console.log(body);
    }
  );
}

if (action === "list") {
  listBooks();
} else if (action === "read") {
  let id = process.argv[3];
  readBook(id);
} else if (action === "create") {
  let name = process.argv[3];
  createBook(name);
} else if (action === "delete") {
  let id = process.argv[3];
  deleteBook(id);
} else if (action === "update") {
  let id = process.argv[3];
  let name = process.argv[4];
  updateBook(id, name);
}
