const request = require("request");
const API_ENDPOINT = "https://lidemy-http-challenge.herokuapp.com/api";
const args = process.argv;

// API 文件：https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba

switch (args[2]) {
  case "list":
    listBooks();
    break;
  case "readID":
    readBookID(args[3]);
    break;
  case "readName":
    readBookName(args[3]);
    break;
  case "create":
    createBook(args[3], args[4]);
    break;
  case "delete":
    deleteBook(args[3]);
    break;
  default:
    console.log("Available comand: list, read, delete, create and update.");
}

function listBooks() {
  request(
    {
      method: "GET",
      url: `${API_ENDPOINT}/books`,
    },
    function (err, res, body) {
      if (err) {
        return console.log("查詢失敗", err);
      }
      const data = JSON.parse(body);
      console.log(data);
    }
  );
}

function createBook(name, ISBN) {
  request(
    {
      method: "POST",
      url: `${API_ENDPOINT}/books`,
      form: { name: name, ISBN: ISBN },
    },
    function (err, res, body) {
      if (err) {
        return console.log("新增失敗", err);
      }
      console.log("新增成功");
      let data = JSON.parse(body);
      console.log(data.id, data.name);
    }
  );
}

function readBookID(id) {
  request(
    {
      method: "GET",
      url: `${API_ENDPOINT}/books/${id}`,
    },
    function (err, res, body) {
      if (err) {
        return console.log("查詢失敗", err);
      }
      console.log(body);
    }
  );
}

function readBookName(name) {
  request(
    {
      method: "GET",
      url: `${API_ENDPOINT}/books?q=${encodeURI(name)}`,
    },
    function (err, res, body) {
      if (err) {
        return console.log("查詢失敗", err);
      }
      console.log(body);
    }
  );
}

function deleteBook(id) {
  request(
    {
      method: "DELETE",
      url: `${API_ENDPOINT}/books/${id}`,
    },
    function (err, res, body) {
      if (err) {
        return console.log("刪除失敗");
      }
      console.log("刪除成功");
      console.log(body);
    }
  );
}
