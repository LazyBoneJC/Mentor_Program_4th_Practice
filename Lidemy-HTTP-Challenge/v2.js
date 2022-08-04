const request = require("request");
const API_ENDPOINT = "https://lidemy-http-challenge.herokuapp.com/api/v2";
const args = process.argv;

// API 文件：https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a
// 帳號：admin
// 密碼：admin123

// getInfo();
// deleteBook(89);
// updateBook(72, "日日好日：茶道教我的幸福15味【電影書腰版】", "9981835423");
// getSystemInfo();

// 最後一關 Lv.10 猜數字
// https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}&num=9613

function getSystemInfo() {
  // https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}&version=1A4938Jl7
  request(
    {
      method: "GET",
      url: `${API_ENDPOINT}/sys_info`,
      headers: {
        Authorization: "Basic YWRtaW46YWRtaW4xMjM=",
        "X-Library-Number": 20,
        "User-Agent":
          "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 6.1; Trident/4.0)",
      },
    },
    function (err, res, body) {
      if (err) {
        return console.log("獲取系統資訊錯誤!", err);
      }
      console.log("獲取系統資訊成功！");
      console.log(body);
    }
  );
}

function updateBook(id, name, ISBN) {
  request(
    {
      method: "PATCH",
      url: `${API_ENDPOINT}/books/${id}`,
      form: { name: name, ISBN: ISBN },
      headers: {
        Authorization: "Basic YWRtaW46YWRtaW4xMjM=",
      },
    },
    function (err, res, body) {
      if (err) {
        return console.log("更改書籍資訊錯誤!", err);
      }
      console.log("更改成功！");
      console.log(body);
    }
  );
}

function readBookName(name) {
  request(
    {
      method: "GET",
      url: `${API_ENDPOINT}/books?q=${encodeURI(name)}`,
      headers: {
        Authorization: "Basic YWRtaW46YWRtaW4xMjM=",
      },
    },
    function (err, res, body) {
      if (err) {
        return console.log("查詢錯誤!", err);
      }
      const data = JSON.parse(body);
      console.log(data);
    }
  );
}

function deleteBook(id) {
  request(
    {
      method: "DELETE",
      url: `${API_ENDPOINT}/books/${id}`,
      headers: {
        Authorization: "Basic YWRtaW46YWRtaW4xMjM=",
      },
    },
    function (err, res, body) {
      if (err) {
        return console.log("刪除錯誤!", err);
      }
      console.log("刪除成功!");
      console.log(body);
    }
  );
}

function getInfo() {
  request(
    {
      method: "GET",
      url: `${API_ENDPOINT}/me`,
      headers: {
        Authorization: "Basic YWRtaW46YWRtaW4xMjM=",
      },
    },
    function (err, res, body) {
      if (err) {
        return console.log("獲取個人資訊錯誤!", err);
      }
      console.log("獲取個人資訊成功！", body);
    }
  );
}
