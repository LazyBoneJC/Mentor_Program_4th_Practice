// const request = new XMLHttpRequest();
// request.onload = function () {
//   console.log(request.responseText);
// };
// request.onerror = function () {
//   console.log("error");
// };
// request.open("post", "https://id.twitch.tv/oauth2/token", true);
// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// request.setRequestHeader("client_id", "eq9p3uunmx3y6a20c9kt4w9owylbe5");
// request.setRequestHeader("client_secret", "mwqf5mcj9bvbxkgitemob10rl6vaxm");
// request.send();

const API_ENDPOINT = "https://id.twitch.tv/oauth2/token";
const request = require("request");

request.post(
  {
    url: API_ENDPOINT,
    headers: {
      // 一直跳錯誤，說 missing client secret，可能格式錯誤
      "Content-Type": "application/x-www-form-urlencoded",
      "Client-Id": "eq9p3uunmx3y6a20c9kt4w9owylbe5",
      client_secret: "1plmaptf30rfck7khd2ao5zil4y8a2",
      grant_type: "client_credentials",
    },
  },
  function (error, response, body) {
    console.error("error:", error);
    // console.log("response:", response.statusCode, response);
    console.log("body:", body);
  }
);
