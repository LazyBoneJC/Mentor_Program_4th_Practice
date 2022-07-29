// hw4：探索新世界
const request = require("request");
const API_ENDPOINT = "https://api.twitch.tv/helix";

request(
  {
    method: "GET",
    url: `${API_ENDPOINT}/games/top`,
    headers: {
      "Client-Id": "eq9p3uunmx3y6a20c9kt4w9owylbe5",
      Authorization: "Bearer w7db0ueuo8jxm76vv4ghv0wyev286h",
    },
  },
  function (error, response, body) {
    if (error) {
      return console.log("抓取失敗", error);
    }

    let json = JSON.parse(body);
    for (let i = 0; i < json.data.length; i++) {
      console.log(json.data[i].id, json.data[i].name);
    }
  }
);
