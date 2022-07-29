// hw1：來自秋秋鞋的任務
let request = require("request");

function printBooks(n) {
  request.get(
    `https://lidemy-book-store.herokuapp.com/books?_limit=${n}`,
    function (error, response, body) {
      let json = JSON.parse(body);
      for (let i = 0; i < json.length; i++) {
        console.log(json[i].id, json[i].name);
      }
    }
  );
}

printBooks(10);
