const request = require("request");
const API_ENDPOINT = "https://lidemy-http-challenge.herokuapp.com/api/v3";
const args = process.argv;

// API 文件：
// https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4
// https://lidemy-http-challenge.herokuapp.com/lv11?token={IhateCORS}

hello();

function hello() {
  request(
    {
      method: "GET",
      url: `${API_ENDPOINT}/hello`,
    },
    function (err, res, body) {
      if (err) {
        return console.log(err);
      }
      console.log(body);
    }
  );
}
