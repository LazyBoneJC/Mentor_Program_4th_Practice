// 挑戰題 (自己寫的版本)
// 寫一個 node.js 的程式並串接 Twitch API，接收一個參數是遊戲名稱，輸出那個遊戲底下最受歡迎的前 200 個實況的名稱與 id。
// 1. Get game -> Get clips
const request = require("request");
const process = require("process");
let gameName = process.argv[2];

function getGames() {
  request.get(
    {
      url: `https://api.twitch.tv/helix/games?name=${gameName}`,
      headers: {
        "Client-Id": "iyge4tz8yrbpp1yrwtpemsufmdd2sf",
        Authorization: "Bearer 7ikq661hb4gnnqz4k328h1rdttz0y1",
      },
    },
    function (error, response, body) {
      let json = JSON.parse(body);
      console.log(json.data[0].name, json.data[0].id);
      getClips(json.data[0].id);
    }
  );
}

function getClips(id) {
  request.get(
    {
      url: `https://api.twitch.tv/helix/clips?game_id=${id}`,
      headers: {
        "Client-Id": "iyge4tz8yrbpp1yrwtpemsufmdd2sf",
        Authorization: "Bearer 7ikq661hb4gnnqz4k328h1rdttz0y1",
      },
    },
    function (error, response, body) {
      let json = JSON.parse(body);
      // let cursor = json.pagination.cursor;
      for (let i = 0; i < json.data.length; i++) {
        // console.log(cursor);
        console.log(
          "Id:",
          json.data[i].broadcaster_id,
          "Name:",
          json.data[i].broadcaster_name,
          "View_Count:",
          json.data[i].view_count
        );
      }
    }
  );
}

getGames();
