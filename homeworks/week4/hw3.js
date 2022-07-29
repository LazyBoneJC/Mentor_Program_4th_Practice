// hw3：周遊列國
const request = require("request");
const process = require("process");

let name = process.argv[2];

function printInformation(name) {
  request.get(
    `https://restcountries.com/v2/name/${name}`,
    function (error, response, body) {
      let json = JSON.parse(body);
      if (!json.length) {
        console.log("找不到國家資訊");
      } else {
        for (let i = 0; i < json.length; i++) {
          console.log("============");
          console.log(`國家：${json[i].name}`);
          console.log(`首都：${json[i].capital}`);
          console.log(`貨幣：${json[i].currencies[0]["code"]}`);
          console.log(`國碼：${json[i].callingCodes}`);
        }
      }
    }
  );
}

printInformation(name);
