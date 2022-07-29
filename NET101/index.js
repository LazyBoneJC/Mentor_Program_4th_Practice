let request = require("request");
let process = require("process");

console.log(process.argv);

// PATCH
request.patch(
  {
    url: "https://reqres.in/api/users/2",
    form: { name: "Hello" },
  },
  function (error, response, body) {
    console.log(response.statusCode);
    console.log(body);
  }
);

// DELETE
request.delete(
  "https://reqres.in/api/users/2",
  function (error, response, body) {
    console.log(response.statusCode); // 回傳 204 代表成功刪除但沒有回傳資料
  }
);

// GET 人物資料
request(
  "https://reqres.in/api/users/" + process.argv[2],
  function (error, response, body) {
    const json = JSON.parse(body); // 傳入 json 格式的字串，會轉成 JS 的 Object
    console.log(json.data.first_name);
  }
);

let obj = {
  name: "Walter",
  age: 21,
};

console.log(JSON.stringify(obj));

// POST 創建人物
request.post(
  {
    url: "https://reqres.in/api/users",
    form: { name: "Walter", job: "none" },
  },
  function (error, response, body) {
    console.log("body:", body);
  }
);
